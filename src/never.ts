type Theme = 'light' | 'dark'

function checkTheme(theme: Theme):void {
    if(theme === 'dark'){
        console.log('dark');
        return;
    }
    else if ( theme === 'light'){
        console.log('light');
        return;
    }

    // theme
    // theme here will have theme: never as all the cases has been handled
}