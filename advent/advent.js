import CalendarComponent from "./calendar.js";

const daysOfAdvent = [{"dayNumber":4,"giftImageUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Domestic_llama_%282009-05-19%29.jpg/220px-Domestic_llama_%282009-05-19%29.jpg","giftUrl":"https://www.youtube.com/watch?v=yal0if2Z40o&ab_channel=ArtGrigorian"},{"dayNumber":6,"giftImageUrl":"https://i1.sndcdn.com/artworks-000647251543-1iygtl-t500x500.jpg","giftUrl":"https://www.youtube.com/watch?v=VRSfFmZan24&ab_channel=MusicAddiction"},{"dayNumber":11,"giftImageUrl":"https://thumbs.dreamstime.com/b/christmas-texas-greeting-card-vector-american-vintage-poster-map-silhouette-holiday-text-design-merry-162498885.jpg","giftUrl":"https://www.youtube.com/watch?v=ejh85Cnticc&ab_channel=GeorgeStrait-Topic"},{"dayNumber":21,"giftImageUrl":"https://images.genius.com/c7fdfff2ba6c7a2bb0ca2157cf4d207c.947x948x1.jpg","giftUrl":"https://youtu.be/hJresi7z_YM"},{"dayNumber":20,"giftImageUrl":"https://images-na.ssl-images-amazon.com/images/I/61YXGdRp0lL._SL1400_.jpg","giftUrl":"https://open.spotify.com/user/umefranksinatra/playlist/3oCVHwlfkoWpPuUabmKIqd?si=D72W7_aIRkifTerckPWaFg"},{"dayNumber":15,"giftImageUrl":"https://static.wikia.nocookie.net/youtube/images/8/8d/Dodie.jpeg/revision/latest?cb=20190607185912","giftUrl":"https://www.youtube.com/watch?v=zA1MkNkq-6M&ab_channel=doddleoddl"},{"dayNumber":23,"giftImageUrl":"","giftUrl":""},{"dayNumber":13,"giftImageUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Nail_%26_Gear.svg/1200px-Nail_%26_Gear.svg.png","giftUrl":"https://www.youtube.com/watch?v=a67XA6pXyvs&ab_channel=HmBoutet"},{"dayNumber":9,"giftImageUrl":"https://m.media-amazon.com/images/I/61ERus9RelL.jpg","giftUrl":"https://www.youtube.com/watch?v=Ih8nm_EW_tc&ab_channel=JKBrickworks"},{"dayNumber":2,"giftImageUrl":"https://images.genius.com/f40c56791d836d0d312540cf4443a216.1000x1000x1.jpg","giftUrl":"https://www.youtube.com/watch?v=rUME3sshJP8&ab_channel=doddlevloggle"},{"dayNumber":17,"giftImageUrl":"https://images.saatchiart.com/saatchi/692406/art/3852444/2922327-KDEQWECK-7.jpg","giftUrl":"https://youtu.be/RbUVKXdu4lQ"},{"dayNumber":8,"giftImageUrl":"https://images.ctfassets.net/iyiurthvosft/featured-img-of-post-215825/b8c9a7a1d96915cbbe83d70191d29367/featured-img-of-post-215825.jpg?fm=jpg&fl=progressive&q=50&w=1200","giftUrl":"https://www.youtube.com/watch?v=COvDtCl5ODg&ab_channel=VincentPrice"},{"dayNumber":25,"giftImageUrl":"","giftUrl":""},{"dayNumber":16,"giftImageUrl":"https://www.irishtimes.com/polopoly_fs/1.4163855.1580993398!/image/image.jpg_gen/derivatives/ratio_4x3_w1200/image.jpg","giftUrl":"https://www.youtube.com/watch?v=U3KxXT-tjqA"},{"dayNumber":24,"giftImageUrl":"https://i.pinimg.com/originals/04/0e/b9/040eb9e2748962a901ee5381386e90ce.jpg","giftUrl":"https://www.poetryfoundation.org/poems/44621/account-of-a-visit-from-st-nicholas"},{"dayNumber":3,"giftImageUrl":"https://i.pinimg.com/originals/aa/aa/84/aaaa84579bf7995c9c0a0eb7977891d3.jpg","giftUrl":"https://www.thisamericanlife.org/radio-archives/episode/514/thought-that-counts"},{"dayNumber":1,"giftImageUrl":"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F11%2Fbaby-yoda-disney-plus-mandalorian-name-grogu-info-001.jpg?q=75&w=800&cbr=1&fit=max","giftUrl":"https://www.youtube.com/watch?v=opB_qb7pv9A&ab_channel=DarrenCarnall-bringingcollectiblestolife"},{"dayNumber":19,"giftImageUrl":"https://44.media.tumblr.com/296e27aa3df7dc32790e90259b061f30/tumblr_p1ipltc1gF1wp7kizo1_640.gif","giftUrl":"https://www.youtube.com/watch?v=dCzDyM8Sgyg&ab_channel=doddleoddle"},{"dayNumber":18,"giftImageUrl":"https://img.brickowl.com/files/image_cache/larger/lego-christmas-tree-set-30576-15.jpg","giftUrl":"https://www.youtube.com/watch?v=7pWd9_VpZgk&ab_channel=JKBrickworks"},{"dayNumber":7,"giftImageUrl":"https://i.pinimg.com/originals/ab/c5/41/abc5417b5adf1c951512366af3edccb6.jpg","giftUrl":"https://www.youtube.com/watch?v=SBG0Bu5NzgA&ab_channel=BricksArcade"},{"dayNumber":12,"giftImageUrl":"https://filmdaily.co/wp-content/uploads/2020/06/babyyoda-lede.jpg","giftUrl":"https://www.youtube.com/watch?v=BJDK8RPb14U&ab_channel=MegaCouchMedia"},{"dayNumber":14,"giftImageUrl":"https://media.wired.com/photos/5a15e013aa80cc4c5af34535/1:1/w_1379,h_1379,c_limit/HolidayLights-51884826.jpg","giftUrl":"https://www.thisamericanlife.org/radio-archives/episode/482/lights-camera-christmas"},{"dayNumber":5,"giftImageUrl":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F56142.jpg","giftUrl":"https://www.youtube.com/watch?v=oue8pdlEvuA&ab_channel=Tasty"},{"dayNumber":22,"giftImageUrl":"https://www.kyforward.com/wp-content/uploads/2015/12/drummerboy.png","giftUrl":"https://www.youtube.com/watch?v=NWFhNyvAZkI"},{"dayNumber":10,"giftImageUrl":"https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/MichaelBuble-Christmas%282011%29-Cover.png/220px-MichaelBuble-Christmas%282011%29-Cover.png","giftUrl":"https://open.spotify.com/album/7uVimUILdzSZG4KKKWToq0?si=bM03u22aTtKQR3eEefhUug"}]

const calendar = new CalendarComponent(daysOfAdvent);
calendar.build();
calendar.appendToRoot();
