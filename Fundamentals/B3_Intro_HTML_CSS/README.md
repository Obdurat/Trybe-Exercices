## Trybe HTML & CSS Intro :computer:

# HTML - (Hyper Text Markup Language) :keyboard:

HTML is a marking text language and not a programming language, created by the cientific community because of a need at the time to share information on a more rich format. HTML enables you to put more information on what is bassically a sheet of paper.

# HTML - How does it work ? :thinking:

HTML is the skeleton of your page. giving it the foundation and structure needed for you to add information to it.

# Why just not use simple Text ? :thinking:

Well, if you use just pure text there's several issues. For Example, how would you represent:

* A Image
* A XLS or other table
* A Video

# Okay, but what it really is ?

### HTML Tag Sintax :keyboard:

<tagName atributte="value">Tag contents</tagName> - (<tagName atributte="value">) Opens the tag, </tagName> closes it. 
Note: Some tags may not need an attribute, value or closing.

### HTML Page Structure :bricks:

* <!DOCTYPE html> - The First line. Tells the browser what kind of page this is.
* <html lang="pt-br"> - The html tag represents the entire scope of your text, the magic happens inside this tag. This specific one is also telling the browser what kind of language we are using for the text.
* <head> This tag doesn't show on your page, it store configuration on how the text will be displayed. The next example sall happen inside the <head> tag: <meta charset="UTF-8"> Teel the browser what kind of characters it can use to present my text. <title> Title of the page, normally display in the browsers Tab.
* <body> All tags of your page that are visible to the user are inside the <body> tag
* <h1> Title Displayed on your page
* <h2> Subtitle display on your page
* <p> Paragraph on your displayed text
* <br> Break line on a paragraph (Happens inside the <p> tag)
* <strong> Make the text Bold (Happens inside the <p> tag)
* <em> Makes the text look Italic but it has a deeper semantic meaning (Happens inside the <p> tag)
* <ol> and <ul> Ordered list and Unordered list, Ordered lists puts number for each item on the list. Unordered list just puts a period
* <li> Adds the content to the list (Happens inside the <ul> or <ol> tags)
* <img attribute="img path"> Displays an image on your page. (Can also have a more attributes for example width="300px" This one will set the width on the displayed image. alt="img Description" Adds description to an image in case it cannot be displayed.)