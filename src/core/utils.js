export function html(strings,...values){
    const l = values.length;
    let html = '';

    for (let i=0;i<l;i++){
        let string = strings[i];
        let value = values[i];

        if (Array.isArray(value)) value = value.join('');
        if (typeof value==='object') value = JSON.stringify(value);

        html += string + value;
    }

    html += strings[strings.length-1];

    return html
}