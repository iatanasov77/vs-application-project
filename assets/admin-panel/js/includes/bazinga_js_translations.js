import { VsPath } from '../includes/fos_js_routes.js';

// https://github.com/willdurand/BazingaJsTranslationBundle/blob/master/Resources/doc/index.md
import Translator from 'bazinga-translator';

var jsonTranslations    = {};
$.ajax({
    url: VsPath( 'bazinga_jstranslation_js', { '_format': 'json', 'domain': 'SalaryJ', 'locales': 'en,bg' } ),
    dataType: 'json'
}).done( function( data ) {
    jsonTranslations    = data;
});

export function VsTranslator()
{
    return Translator.fromJSON( jsonTranslations );
}
