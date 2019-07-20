var tweetsHTML = document.getElementsByClassName('css-1dbjc4n r-18u37iz r-1wtj0ep r-zl2h9q')
setInterval(scan_tweets, 5000);
//setTimeout(scan_tweets, 5000);

function scan_tweets(){
    console.log(tweetsHTML)
    var tweets = Array.prototype.slice.call(tweetsHTML)

    for(tweet of tweets){
        try {

            // The tweet object
            console.log(tweet)

            // Author's username
            user_profile_url = tweet.firstChild.firstChild.firstChild.href
            username = tweet.firstChild.firstChild.firstChild.href.split('/')[3]

            // UTC timestamp of the tweet
            utc_timestamp = tweet.firstChild.childNodes[2].firstChild.getAttribute('datetime')

            // Don't check the tweet if it's already been checked
            if(tweet.getAttribute('local_tweet_time') == 'checked'){
                continue;
            }

            get_location(tweet, username, utc_timestamp)

            tweet.setAttribute('local_tweet_time', 'checked')

        } catch (error){
            //console.log("e: "+error);
        }   
    }
}

function get_location(tweet, username, utc_timestamp){
    // Get the user's location
    $.ajax({
        url : '/'+username,
        type : "get",
        success : function(html) {
            str = html.substring(html.indexOf('<span class="ProfileHeaderCard-locationText u-dir" dir="ltr">'), html.length)
            location_string = str.substring('<span class="ProfileHeaderCard-locationText u-dir" dir="ltr">'.length, str.indexOf('<div class="ProfileHeaderCard-url'))
            
            // So, now we have

            // Tweet
            console.log(tweet)

            // Username
            console.log(username)

            // UTC time stamp
            console.log(utc_timestamp)

            // Location String
            console.log(location_string.trim())

            // Hand it over to the other method to finish the job
            add_local_time_to_tweets(tweet, username, utc_timestamp, location_string)

        },
        error: function() {
           //connectionError();
        }
    });
}


function add_local_time_to_tweets(tweet, username, utc_timestamp, location_string){

    // Now let's find countries in the text
    chrome.storage.sync.get('countries', function(data) {
        //console.log(data)

        var countries = []
        for(i=0; i<data['countries'].length; i++){
            countries.push(data['countries'][i]) 
        }
        
        //console.log(countries)

        var flag = false
        for(i=0; i<countries.length; i++) {

            if (location_string.indexOf(countries[i]) > -1) {
                console.log(username + ' is in country ' + countries[i])

                // Add local time to tweet
                p = document.createElement('span')
                p.innerText = ' ' +countries[i]
                p.style.color = '#8899a6'
                p.style.fontWeight = 400
                p.style.fontSize = '15px'

                tweet.firstChild.appendChild(p)


                flag = true
                break;
            }

        }
        if(flag == false){
            console.log(username + ' is in no country :(')

            // Add local time to tweet
            p = document.createElement('span')
            p.innerText = ' (No country)'
            p.style.color = '#8899a6'
            p.style.fontWeight = 400
            p.style.fontSize = '15px'

            tweet.firstChild.appendChild(p)

        }


    });



}