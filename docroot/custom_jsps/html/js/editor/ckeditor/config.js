/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

/*
 * Si se usa este hook junto a lms-portlet, hay que duplicar la configuración aquí presente 
 * en lms-portlet, ya que allí también existe un hook del CKEditor.
 */

CKEDITOR.editorConfig = function( config ) {

	if (!stylesSet.get('liferayStyles')) {
		addStylesSet(
			'liferayStyles',
			[

			// Block Styles

			{name: 'Normal', element: 'p'},
			{name: 'Heading 1', element: 'h1'},
			{name: 'Heading 2', element: 'h2'},
			{name: 'Heading 3', element: 'h3'},
			{name: 'Heading 4', element: 'h4'},

			// Special classes

			{name: 'Preformatted Text', element:'pre'},
			{name: 'Cited Work', element:'cite'},
			{name: 'Computer Code', element:'code'},

			// Custom styles

			{name: 'Info Message', element: 'div', attributes: {'class': 'portlet-msg-info'}},
			{name: 'Alert Message', element: 'div', attributes: {'class': 'portlet-msg-alert'}},
			{name: 'Error Message', element: 'div', attributes: {'class': 'portlet-msg-error'}}
			]
		);
	}

	// config.bodyClass = 'html-editor <%= HtmlUtil.escapeJS(cssClasses) %>';

	// config.contentsCss = '<%= HtmlUtil.escapeJS(cssPath) %>/main.css';

	config.entities = false;

	config.height = 100;

	// config.language = '<%= HtmlUtil.escapeJS(languageId) %>';

	config.stylesCombo_stylesSet = 'liferayStyles';

	config.allowedContent = true;

	// config.pasteFromWordPromptCleanup = true;
	config.pasteFromWordRemoveFontStyles = false;
	config.pasteFromWordRemoveStyles = false;

	config.extraPlugins = 'texttransform';

	config.toolbar_editInPlace = [
		['Styles'],
		['Bold', 'Italic', 'Underline', 'Strike'],
		['Subscript', 'Superscript', 'SpecialChar'],
		['Undo', 'Redo'],
		['SpellChecker', 'Scayt'],
		['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent'], ['Source', 'RemoveFormat'],
	];

	config.toolbar_email = [
		['FontSize', 'TextColor', 'BGColor', '-', 'Bold', 'Italic', 'Underline', 'Strike'],
		['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
		['SpellChecker', 'Scayt'],
		'/',
		['Undo', 'Redo', '-', 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'SelectAll', 'RemoveFormat'],
		['Source'],
		['Link', 'Unlink'],
		['Image']
	];

	config.toolbar_liferay = [
		['Styles', 'FontSize', '-', 'TextColor', 'BGColor'],
		['Bold', 'Italic', 'Underline', 'Strike'],
		['Subscript', 'Superscript'],
		'/',
		['Undo', 'Redo', '-', 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'SelectAll', 'RemoveFormat'],
		['Find', 'Replace', 'SpellChecker', 'Scayt'],
		['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent'],
		['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
		'/',
		['Source'],
		['Link', 'Unlink', 'Anchor'],
		['Image', 'Flash', 'Table', '-', 'Smiley', 'SpecialChar'],
		['TransformTextToUppercase', 'TransformTextToLowercase', 'TransformTextCapitalize', 'TransformTextSwitcher']
	];

	config.toolbar_liferayArticle = [
		['Styles', 'FontSize', '-', 'TextColor', 'BGColor'],
		['Bold', 'Italic', 'Underline', 'Strike'],
		['Subscript', 'Superscript'],
		'/',
		['Undo', 'Redo', '-', 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'SelectAll', 'RemoveFormat'],
		['Find', 'Replace', 'SpellChecker', 'Scayt'],
		['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
		['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
		'/',
		['Source'],
		['Link', 'Unlink', 'Anchor'],
		['Image', 'Flash', 'Table', '-', 'Smiley', 'SpecialChar', 'LiferayPageBreak'],
		['TransformTextToUppercase', 'TransformTextToLowercase', 'TransformTextCapitalize', 'TransformTextSwitcher']
	];

	config.toolbar_slimmer = [
		['FontSize', 'TextColor'],
		['Bold', 'Italic', 'Underline', 'Strike'],
		['Subscript', 'Superscript'],
		['NumberedList','BulletedList'],
		['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
		['Source', 'Link', 'Image', 'Table']
	];


	config.toolbar_actslimmer = [
		['FontSize', 'TextColor'],
		['Bold', 'Italic', 'Underline', 'Strike'],
		['Subscript', 'Superscript'],
		['NumberedList','BulletedList'],
		['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
		['Source', 'Link', 'Image', 'Table']
	];


	config.toolbar_actliferay = [
		['Styles', 'FontSize', '-', 'TextColor', 'BGColor'],
		['Bold', 'Italic', 'Underline', 'Strike'],
		['Subscript', 'Superscript'],
		'/',
		['Undo', 'Redo', '-', 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'SelectAll', 'RemoveFormat'],
		['Find', 'Replace', 'SpellChecker', 'Scayt'],
		['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent'],
		['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
		'/',
		['Source'],
		['Link', 'Unlink', 'Anchor'],
		['Image', 'Flash', 'Table', '-', 'Smiley', 'SpecialChar'],
		['TransformTextToUppercase', 'TransformTextToLowercase', 'TransformTextCapitalize', 'TransformTextSwitcher']
	];
};
