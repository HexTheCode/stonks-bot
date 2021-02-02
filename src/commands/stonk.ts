import { search, detail, news } from '../utils/apis/polygon/request.ts';
import { createCommand, createSubcommand } from '../utils/helpers.ts'
import { Embed } from '../utils/Embed.ts'

createCommand({
  name: "stonk",
  arguments: [
    {
      name: "search",
      type: "subcommand",
      required: true,
    }
  ]
});

createSubcommand("stonk", {
  name: "search",
  arguments: [
    {
      name: "term",
      type: "string",
      required: true,
      missing: (message) => {
        message.reply('Please provide a term to search.')
      },
    }
  ],
  execute: async (message, args) => {
    const embed = new Embed()
      .setColor("#232cdb")
      .setTitle(`Results of '${args.term}':`);
    
    const results = await search(args.term);

    results.map(async (result: any) => {
      embed.addField(result["ticker"],result["name"], false);
    });

    return await message.send( {embed} );
  },
})

createSubcommand("stonk", {
  name: "detail",
  arguments: [
    {
      name: "term",
      type: "string",
      required: true,
      missing: (message) => {
        message.reply('Please provide a Symbol to see details.')
      }
    }
  ],
  execute: async (message, args) => {
    let results = await detail(args.term);
    const embed = new Embed()
      .setColor("#232cdb")
      .setDescription(results["description"])
      .setThumbnail(results["logo"])
      .setTitle(results["name"], results["url"])
      .addField('\u200B', '\u200B')
      .addField("Ceo", results["ceo"], true)
      .addField("Employees", results["employees"], true)
      .addField("Industry", results["industry"], true)
      .addField("Sector", results["sector"], true)
      .addField("Country", results["hq_country"], true)
      .addField("Symbol", results["symbol"], true)
      .addField("Address", results["hq_address"], false)
      .addField('\u200B', '\u200B')
      .setFooter("With ❤️ by HexTheCode");
    return await message.send({embed});
  }
})

createSubcommand("stonk", {
  name: "news",
  arguments: [
    {
      name: "term",
      type: "string",
      required: true,
      missing: (message) => {
        message.reply('Please provide a Symbol for see its news.')
      }
    }
  ],
  execute: async (message, args) => {
    let results = await news(args.term);
    const embed = new Embed()
      .setTitle(results["title"], results["url"])
      .setDescription(results["summary"])
      .setThumbnail(results["image"])
      .setTimestamp(results["timestamp"])
      .setColor("#232cdb")
      .setFooter("With ❤️ by HexTheCode");
    
    return await message.send({embed})
  }
})