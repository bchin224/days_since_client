// $('.btn').click(function() {
//     $('.text').text('loading . . .');
//     $.ajax({
//             type: "GET",
//             url: "https://pokeapi.co/api/v2/pokemon/ditto",
//             dataType: 'json',
//         })
//         .then(function(response) {
//             $('.text').text('')
//             $('.text').after('<img src="' + response.sprites.front_default + '" />')
//         })
//         .catch(function() {
//             console.log('ajax request failed')
//         })
// });

$('.btn').click(function() {
    $('.text').text('loading . . .');
    $.ajax({
            type: "GET",
            url: "https://api.meetup.com//find/topic_categories",
            dataType: 'jsonp',
        })
        .then(function(response) {
          console.log(response)
            response.data.forEach(event => {
                $('.text').text('')
                $('.text').after('<img src="' + event.photo.thumb_link + '" />')
            })
        })
        .catch(function() {
            console.log('ajax request failed')
        });
});


// https: //api.meetup.com/2/cities
