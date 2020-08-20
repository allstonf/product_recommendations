import scrapy
from ..items import AmazontutorialItem

class AmazonSpiderSpider(scrapy.Spider):
    name = "amazon"
    page_number = 2
    start_urls = [
    	# "https://www.amazon.com/s?bbn=283155&rh=n%3A283155%2Cp_n_publication_date%3A1250226011&dc&fst=as%3Aoff&qid=1595896613&rnid=1250225011&ref=lp_283155_nr_p_n_publication_date_0",
    	"https://www.amazon.com/s?k=snow+sled&ref=nb_sb_noss_1"
    ]

    # def start_requests(self):
    #     for url in AmazonSpiderSpider.start_urls:
    #     	print("\n current url: " + url + "\n")
    #     	yield scrapy.Request(url = url, callback = self.parse)

    def parse(self, response):
    	items = AmazontutorialItem()

    	# product_name
    	product_name = response.css(".a-color-base.a-text-normal::text").extract()
    	if product_name == []:
    		print("product_name is currently empty. trying another element...")
    		product_name = response.css(".s-line-clamp-4::text").extract()

    	# product_author
    	# product_author = response.css(".sg-col-12-of-28 .a-size-base+ .a-size-base").css("::text").extract()

    	# product_price
    	product_price = response.css(".a-spacing-top-small .a-price-fraction , .a-spacing-top-small .a-price-whole").css("::text").extract()
    	if product_price == []:
    		print("product_price is currently empty. trying another element...")
    		product_price = response.css(".a-price span span").css("::text").extract()

    	# product_imagelink
    	product_imagelink = response.css(".s-image::attr(src)").extract() #response.css(".s-image-fixed-height::attr(src)").extract()

    	# product_link
    	product_link = response.css("a.a-link-normal s-access-detail-page a-text-normal").css("::attr(href)").extract_first()
    	# product_link = response.css(".a-size-base-plus .a-link-normal .a-text-normal").css("::attr(href)").extract() #response.css(".s-image-fixed-height::attr(src)").extract()

    	items["product_name"] = product_name
    	# items["product_author"] = product_author
    	items["product_price"] = product_price
    	items["product_imagelink"] = product_imagelink
    	items["product_link"] = product_link

    	yield items

    	# next_page = "https://www.amazon.com/s?i=stripbooks&bbn=283155&rh=n%3A283155%2Cp_n_publication_date%3A1250226011&dc&page=" + str(AmazonSpiderSpider.page_number) + "&fst=as%3Aoff&qid=1595896622&rnid=1250225011&ref=sr_pg_2"
    	next_page = "https://www.amazon.com/s?k=snow+sled&page=" + str(AmazonSpiderSpider.page_number) + "&qid=1595968264&ref=sr_pg_2"
    	if AmazonSpiderSpider.page_number <= 100:
    		AmazonSpiderSpider.page_number += 1
    		yield response.follow(next_page, callback = self.parse)

    	# AmazonSpiderSpider.page_number = 2