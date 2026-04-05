.PHONY: serve deploy clean

serve:
	hugo server \
		--source exampleSite \
		--themesDir ../.. \
		--baseURL "http://localhost:1313/"

deploy:
	./publish.sh

clean:
	rm -rf exampleSite/public