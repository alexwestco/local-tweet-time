var tweetsHTML = document.getElementsByClassName('css-1dbjc4n r-18u37iz r-1wtj0ep r-zl2h9q')
setInterval(scan_tweets, 5000);
//setTimeout(scan_tweets, 5000);

function scan_tweets(){
    //console.log(tweetsHTML)
    var tweets = Array.prototype.slice.call(tweetsHTML)

    for(tweet of tweets){
        try {

            // The tweet object
            //console.log(tweet)

            // Author's username
            user_profile_url = tweet.firstChild.firstChild.firstChild.href
            username = tweet.firstChild.firstChild.firstChild.href.split('/')[3]

            // UTC timestamp of the tweet
            utc_timestamp = tweet.firstChild.childNodes[2].firstChild.getAttribute('datetime')

            // Don't check the tweet if it's already been checked
            if(tweet.getAttribute('local_tweet_time') == 'checked'){
                continue;
            }

            get_details(tweet, username, utc_timestamp)

            tweet.setAttribute('local_tweet_time', 'checked')

        } catch (error){
            //console.log("e: "+error);
        }   
    }
}

function get_details(tweet, username, utc_timestamp){
    // Get the user's location
    $.ajax({
        url : '/'+username,
        type : "get",
        success : function(html) {
            str = html.substring(html.indexOf('<span class="ProfileHeaderCard-locationText u-dir" dir="ltr">'), html.length)
            location_string = str.substring('<span class="ProfileHeaderCard-locationText u-dir" dir="ltr">'.length, str.indexOf('<div class="ProfileHeaderCard-url'))
            
            // So, now we have

            // Tweet
            //console.log(tweet)

            // Username
            //console.log(username)

            // UTC time stamp
            //console.log(utc_timestamp)

            // Location String
            //console.log(location_string.trim())

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
            if (location_string.includes(countries[i][0])) {

                //console.log(username + ' is in country ' + countries[i][0])

                // Convert to local time. We have the tweet's UTC time here
                //console.log(utc_timestamp)

                date = new Date(utc_timestamp)
                now_utc =  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
                timestamp = new Date(now_utc);

                sign = countries[i][1][3]
                hours = countries[i][1][4] + '' + countries[i][1][5]
                minutes = countries[i][1][7] + '' + countries[i][1][8]
                //console.log(sign)
                //console.log(hours)
                //console.log(minutes)

                if(sign == '+'){
                    timestamp.setUTCHours(timestamp.getUTCHours() + parseInt(hours));
                    timestamp.setUTCMinutes(timestamp.getUTCMinutes() + parseInt(minutes));
                }else if(sign == '-'){
                    // BEWARE!!! This (−) is not the minus sign (-)
                    timestamp.setUTCHours(timestamp.getUTCHours() - parseInt(hours));
                    timestamp.setUTCMinutes(timestamp.getUTCMinutes() - parseInt(minutes));
                }
                
                // Add local time to tweet
                p = document.createElement('span')
                hours_str = ''
                minutes_str = ''
                if(timestamp.getUTCHours() < 10){
                    hours_str = '0'+ timestamp.getUTCHours()
                }else{
                    hours_str = timestamp.getUTCHours()
                }
                if(timestamp.getUTCMinutes() < 10){
                    minutes_str = '0' + timestamp.getUTCMinutes()
                }else{
                    minutes_str = timestamp.getUTCMinutes()
                }
                p.innerText =  ' - ' + hours_str + ':' + minutes_str + ' local time'
                p.style.color = '#8899a6'
                p.style.fontWeight = 400
                p.style.fontSize = '14px'
                p.style.fontFamily = 'Helvetica Neue'

                tweet.firstChild.appendChild(p)


                flag = true
                break;
            }

        }
        if(flag == false){
            //console.log(username + ' is in no country :(')

            // Add local time to tweet
            p = document.createElement('span')
            p.innerText = ' (No country)'
            p.style.color = '#8899a6'
            p.style.fontWeight = 400
            p.style.fontSize = '15px'

            //tweet.firstChild.appendChild(p)

        }


    });



}