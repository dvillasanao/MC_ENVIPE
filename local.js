<script src="lightbox.js"></script>

<script>
$('img')
    .wrap(function(index) {
        return '<a href="'+$(this).attr('src')+'" data-lightbox="image-'+index+'"></a>';
    });
</script>