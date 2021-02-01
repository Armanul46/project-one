const title  = document.querySelector('#title');
const author = document.querySelector('#author');
const year   = document.querySelector('#year');
const btn    = document.querySelector('.btn');
const book_list = document.querySelector('#book-list');

btn.addEventListener('click', function(e) {
    e.preventDefault();

    if( title.value == '' ) {
        alert('Please fill up the name');
    } else if( author.value == '') {
        alert('Please fill up the position');
    } else if( year.value == '' ) {
        alert('please fill up the year');
    } else {
        const new_tr = document.createElement('tr');

        const new_title = document.createElement('th');
        new_title.innerHTML = title.value;
        new_tr.appendChild( new_title );

        const new_author = document.createElement('th');
        new_author.innerHTML = author.value;
        new_tr.appendChild(new_author);

        const new_year = document.createElement('th');
        new_year.innerHTML = year.value;
        new_tr.appendChild(new_year);
        
        book_list.appendChild(new_tr);
        title.value = '';
        author.value = '';
        year.value = '';
    }
});