const { crawlPage } = require('./crawl')

async function main(){
    if(process.env.length < 3){
        console.log("No Website provided");
        process.exit(1)
    }
    if (process.env.length > 3){
        console.log(`Too many command line args`);
    }
    const baseURL = process.argv[2]
    console.log(`starting crawl ${baseURL}`);

    const pages = await crawlPage(baseURL, baseURL, {})

    for(const page of Object.entries(pages)){
        console.log(page);
    }
}
main()