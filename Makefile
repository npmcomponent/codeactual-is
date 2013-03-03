dist: components index.js
	@component build --standalone is --name is

build: components index.js
	@component build --standalone is --name is --dev

components: component.json
	@component install --dev

clean:
	rm -fr build

.PHONY: clean
