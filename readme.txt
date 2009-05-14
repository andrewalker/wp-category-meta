=== Category Meta plugin ===
Contributors: Eric Le Bail
Donate link: #
Tags: category,meta,category meta,admin,plugin
Requires at least: 2.6
Tested up to: 2.6.5
Stable tag: trunk

Add the ability to attach meta to the wordpress categories.

== Description ==

This plugins add meta to the wordpress categories.

It Creates a wp-termsmeta table to store the entered meta.

It adds input fields to the category administration interface to enter the meta values.

It provides functions to retrive / create / update / delte the category meta.

== Installation ==

1. Unzip into your `/wp-content/plugins/` directory. If you're uploading it make sure to upload
the top-level folder. Don't just upload all the php files and put them in `/wp-content/plugins/`.

2. Edit the wp-category-meta.php file to adapt the lis of meta you wants (line 38).

3. Activate the plugin through the 'Plugins' menu in WordPress

4. go to your Administration interface in, the "category" menu -> new fields are displayed in the category creation/modification form.

5. That's it!

6. you can use the folowing functions into your templates to retreive 1 meta:
`<?php if (function_exists('get_terms_meta'))`
`{ $metaValue = get_terms_meta($category_id, $meta_key); }`
`?>`

7. you can use the folowing functions into your templates to retreive all meta:
`<?php if (function_exists('get_all_terms_meta'))`
`{ $metaList = get_all_terms_meta($category_id); }`
`?>`

== Frequently Asked Questions ==

I use this plugin into my own blog sucessfuly.
If you have any problem / corrections let me now 
(do not forget to give me the WordPress version You have).
