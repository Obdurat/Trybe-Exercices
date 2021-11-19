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

### HTML Tag Sintax (Ignore [*]):keyboard:

<em><*tagName atributte="value">Tag contents <*/tagName></em> - (<em><*tagName atributte="value"></em>) Opens the tag, <*/tagName> closes it. 
Note: Some tags may not need an attribute, value or closing.

### HTML Page Structure :bricks:

* <em><*!DOCTYPE html></em> - The First line. Tells the browser what kind of page this is.
* <em><*html lang="pt-br"></em> - The html tag represents the entire scope of your text, the magic happens inside this tag. This specific one is also telling the browser what kind of language we are using for the text.
* <em><*head></em> This tag doesn't show on your page, it store configuration on how the text will be displayed. The next example shall happen inside the head tag: <em><*meta charset="UTF-8"></em> Tell the browser what kind of characters it can use to present my text. 
* <em><*title></em> Title of the page, normally display in the browsers Tab.
* <em><*body></em> All tags of your page that are visible to the user are inside the <em><*body></em> tag
* <em><*h1></em> Title Displayed on your page
* <em><*h2></em> Subtitle display on your page
* <em><*p></em> Paragraph on your displayed text
* <em><*br></em> Break line on a paragraph (Happens inside the <em><*p></em> tag)
* <em><*strong></em> Make the text Bold (Happens inside the <em><*p></em> tag)
* <em><*em></em> Makes the text look Italic but it has a deeper semantic meaning (Happens inside the <em><*p></em> tag)
* <em><*ol></em> and <em><*ul></em> Ordered list and Unordered list, Ordered lists puts number for each item on the list. Unordered list just puts a period
* <em><*li></em> Adds the content to the list (Happens inside the <em><*ul></em> or <em><*ol></em> tags)
* <em><*img attribute="img path"></em> Displays an image on your page. (Can also have a more attributes for example width="300px" This one will set the width on the displayed image. alt="img Description" Adds description to an image in case it cannot be displayed.)