# Trybe HTML & CSS Intro :computer:

## HTML - (Hyper Text Markup Language) :keyboard:

HTML is a marking text language and not a programming language, created by the cientific community because of a need at the time to share information on a more rich format. HTML enables you to put more information on what is bassically a sheet of paper.

## HTML - How does it work ? :thinking:

HTML is the skeleton of your page. giving it the foundation and structure needed for you to add information to it.

## Why just not use simple Text ? :thinking:

Well, if you use just pure text there's several issues. For Example, how would you represent:

* A Image
* A XLS or other table
* A Video

# Okay, but what it really is ?

### HTML Tag Sintax (Ignore [*]):keyboard:

<em><strong><*tagName atributte="value">Tag contents <*/tagName></strong></em> - (<em><strong><*tagName atributte="value"></strong></em>) Opens the tag, <em><strong><*/tagName></strong></em> closes it. 
Note: Some tags may not need an attribute, value or closing.

### HTML Page Structure :bricks:

* <em><strong><*!DOCTYPE html></strong></em> - The First line. Tells the browser what kind of page this is.
* <em><strong><*html lang="pt-br"></strong></em> - The html tag represents the entire scope of your text, the magic happens inside this tag. This specific one is also telling the browser what kind of language we are using for the text.
* <em><strong><*head></strong></em> This tag doesn't show on your page, it store configuration on how the text will be displayed. The next example shall happen inside the head tag: <em><strong><*meta charset="UTF-8"></strong></em> Tell the browser what kind of characters it can use to present my text. 
* <em><strong><*title></strong></em> Title of the page, normally display in the browsers Tab.
* <em><strong><*body></strong></em> All tags of your page that are visible to the user are inside the <em><strong><*body></strong></em> tag
* <em><strong><*h1></strong></em> Title Displayed on your page
* <em><strong><*h2></strong></em> Subtitle display on your page
* <em><strong><*p></strong></em> Paragraph on your displayed text
* <em><strong><*br></strong></em> Break line on a paragraph (Happens inside the <em><strong><*p></strong></em> tag)
* <em><strong><*strong></strong></em> Make the text Bold (Happens inside the <em><strong><*p></strong></em> tag)
* <em><strong><*em></strong></em> Makes the text look Italic but it has a deeper semantic meaning (Happens inside the <em><strong><*p></strong></em> tag)
* <em><strong><*ol></strong></em> and <em><strong><*ul></strong></em> Ordered list and Unordered list, Ordered lists puts number for each item on the list. Unordered list just puts a period
* <em><strong><*li></strong></em> Adds the content to the list (Happens inside the <em><strong><*ul></strong></em> or <em><strong><*ol></strong></em> tags)
* <em><strong><*img attribute="img path"></strong></em> Displays an image on your page. (Can also have a more attributes for example <strong>width="300px"</strong> This one will set the width on the displayed image. <strong>alt="img Description"</strong> Adds description to an image in case it cannot be displayed.)
* <em><strong><*a></strong></em> Creates a <a href=https://www.techopedia.com/definition/5175/hyperlink>HyperLink</a> It can both reference from a external source or a internal source using <strong><em>href</strong></em> or <strong><em>target</strong></em> as an attribute followed by the desired path/URL.