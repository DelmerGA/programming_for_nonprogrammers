# PFNP
## Intro HTML

| Objectives |
| :--- |
| Explain the concerns of markup and content |
| Examine and list different tags in HTML |
| Apply HTML to structure a page. |

### Outline

* **HTML**
  * Markup and Content
  * HTML -- Hello World 
  * Presentational vs Semantic HTML
  * HTML5
  * Exercises
  * Images
  * SVG 
  * Resources
    * Can I Use



## Markup and Content

**Content**

>  *The principal substance (as written matter, illustrations, or music) offered by a World Wide Web site.*

[Content by itself doesn't not have structure, especially text.](/text.txt)

Content put into documents needs a way to refer to other related documents.

Content in a document can be video or audio media.

### Some Terms And History

* **Hypertext** a document that contains links that reference other documents.
* **Markup** is the term used for a system annotations that creates distinctions in the structure of text
* **Tim Berners-Lee**: was a physicist who worked on *hypertext* for the internet
* **HTML**, **H**yper**T**ext **M**arkup **L**anguage, the agreed upon markup used to represent hypertext and hypermedia in browsers.



## HTML -- Hello World


Let's start our first **HTML** document. How would we tell the world **Hello**.


```
<!DOCTYPE html>
<html>
	<head>
	</head>
	<body>
		Hello, World!
	</body>
</html>

```


**HTML** is full of **tags** that break up the document into relevant components that the browser requires or can use to represent the text. Most **tags** will open, `<head>` or `<body>`, and close, `</head>` or `</body>` to denote the end of section.


Let's dicuss some of the tags from the example above:

* **`<!DOCTYPE html>`** tells the browser information about the `type` of document it is reading. 
* **`<html>`** and **`</html>`** marks the beginning and end of an **HTML** document and can be used to tell the browser which language the content is written in.
* **`<head>`** and **`</head>`** contains the relevant instructions and meta information for the browser and is not displayed.
* **`<body>`** and **`</body>`** contain all the visible content on the page.

> You'll always need these tags for **any** site you'll make.

What if we had more to say than "Hello, World?"

How would we represent [this text from earlier](/hello_world.html)

[Let's see here](frontend/HTML/hello_world_2.html).










