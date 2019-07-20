chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        // create array of counties
        country_list = [
        ["Afghanistan", "UTC+04:30"],
        ["Albania", "UTC+01:00"],
        ["Algeria", "UTC+01:00"],
        ["Andorra", "UTC+01:00"],
        ["Angola", "UTC+01:00"],
        ["Antigua &amp; Barbuda", "UTC−04:00"],
        ["Argentina", "UTC−03:00"],
        ["Armenia", "UTC+04:00"],
        ["Australia", "UTC+10:00"],
        ["Austria", "UTC+01:00"],
        ["Azerbaijan", "UTC+04:00"],
        ["Bahamas", "UTC−05:00"],
        ["Bahrain", "UTC+03:00"],
		["Bangladesh", "UTC+06:00"],
		["Barbados", "UTC−04:00"],
		["Belarus", "UTC+03:00"],
		["Belgium", "UTC+01:00"],
		["Belize", "UTC−06:00"],
		["Benin", "UTC+01:00"],
		["Bhutan", "UTC+06:00"],
		["Bolivia", "UTC−04:00"],
		["Bosnia &amp; Herzegovina", "UTC+01:00"],
		["Botswana", "UTC+02:00"],
		["Brazil", "UTC−03:00"],
		["Brunei", "UTC+08:00"],
		["Bulgaria", "UTC+02:00"],
		["Burkina Faso", "UTC±00:00"],
		["Burundi", "UTC+02:00"],
		["Cambodia", "UTC+07:00"],
		["Cameroon", "UTC+01:00"],

		["Canada" , "UTC+"],
		["Toronto", ""],
		["Vancouver", ""],
		["Montreal", ""],

		["Cape Verde", "UTC−01:00"],
		["Chad", "UTC+01:00"],
		["Chile", "UTC−04:00"],
		["China", "UTC+08:00"],
		["Colombia", "UTC−05:00"],
		["Congo", "UTC+01:00"],
		["Costa Rica", "UTC−06:00"],
		["Cote D Ivoire", "UTC±00:00"],
		["Ivory Coast" , "UTC±00:00"],
		["Croatia", "UTC+01:00"],
		["Cuba", "UTC−05:00"],
		["Cyprus", "UTC+02:00"],
		["Czech Republic", "UTC+01:00"],
		["Denmark", "UTC+01:00"],
		["Djibouti", "UTC+03:00"],
		["Dominica", "UTC−04:00"],
		["Dominican Republic", "UTC−04:00"],
		["Ecuador", "UTC−05:00"],
		["Egypt", "UTC+02:00"],
		["El Salvador", "UTC−06:00"],
		["Equatorial Guinea", "UTC+01:00"],
		["Estonia", "UTC+02:00"],
		["Ethiopia", "UTC+03:00"],
		["Fiji", "UTC+12:00"],
		["Finland", "UTC+02:00 "],
		["France", "UTC+01:00"],
		["Gabon", "UTC+01:00"],
		["Gambia", "UTC±00:00"],
		["Georgia", "UTC+04:00"],
		["Germany", "UTC+01:00"],
		["Ghana", "UTC±00:00"],
		["Gibraltar", "UTC+01:00"],
		["Greece", "UTC+02:00"],
		["Grenada", "UTC−04:00"],
		["Guatemala", "UTC−06:00"],
		["Guinea", "UTC±00:00"],
		["Guinea Bissau", "UTC±00:00"],
		["Guyana", "UTC−04:00"],
		["Haiti", "UTC−05:00"],
		["Honduras", "UTC−06:00"],
		["Hong Kong", "UTC+08:00"],
		["Hungary", "UTC+01:00"],
		["Iceland", "UTC±00:00"],
		["India", "UTC+05:30"],
		["Indonesia", "UTC+08:00"],
		["Iran", "UTC+03:30"],
		["Iraq", "UTC+03:00"],
		["Ireland", "UTC±00:00"],
		["Israel", "UTC+02:00"],
		["Italy", "UTC+01:00"],
		["Jamaica", "UTC−05:00"],
		["Japan", "UTC+09:00"],
		["Jordan", "UTC+02:00"],
		["Kazakhstan", "UTC+05:00"],
		["Kenya", "UTC+03:00"],
		["Kuwait", "UTC+03:00"],
		["Kyrgyzstan", "UTC+06:00"],
		["Laos", "UTC+07:00"],
		["Latvia", "UTC+02:00"],
		["Lebanon", "UTC+02:00"],
		["Lesotho", "UTC+02:00"],
		["Liberia", "UTC±00:00"],
		["Libya", "UTC+02:00"],
		["Liechtenstein", "UTC+01:00"],
		["Lithuania", "UTC+02:00"],
		["Luxembourg", "UTC+01:00"],
		["Macau", "UTC+08:00"],
		["Madagascar", "UTC+03:00"],
		["Malawi", "UTC+02:00"],
		["Malaysia", "UTC+08:00"],
		["Maldives", "UTC+05:00"],
		["Mali", "UTC±00:00"],
		["Malta", "UTC+01:00"],
		["Mauritania", "UTC±00:00"],
		["Mauritius", "UTC+04:00"],
		["Mexico", "UTC−06:00"],
		["Moldova", "UTC+02:00"],
		["Monaco", "UTC+01:00"],
		["Mongolia", "UTC+08:00"],
		["Montenegro", "UTC+01:00"],
		["Morocco", "UTC+01:00"],
		["Mozambique", "UTC+02:00"],
		["Namibia", "UTC+01:00"],
		["Nepal", "UTC+05:45"],
		["Netherlands", "UTC+01:00"],
		["New Zealand", "UTC+12:00"],
		["Nicaragua", "UTC−06:00"],
		["Niger", "UTC+01:00"],
		["Nigeria", "UTC+01:00"],
		["Norway", "UTC+01:00"],
		["North Korea", "UTC+09:00"],
		["Oman", "UTC+04:00"],
		["Pakistan", "UTC+05:00"],
		["Palestine", "UTC+02:00"],
		["Panama", "UTC−05:00"],
		["Papua New Guinea", "UTC+10:00"],
		["Paraguay", "UTC−04:00"],
		["Peru", "UTC−05:00"],
		["Philippines", "UTC+08:00"],
		["Poland", "UTC+01:00"],
		["Portugal", "UTC±00:00"],
		["Puerto Rico", "UTC−04:00"],
		["Qatar", "UTC+03:00"],
		["Romania", "UTC+02:00"],
		
		["Russia", "UTC+03:00"],
		["Moscow", "UTC+03:00"],

		["Rwanda", "UTC+02:00"],
		["Samoa", "UTC+13:00"],
		["San Marino", "UTC+01:00"],
		["Saudi Arabia", "UTC+03:00"],
		["Senegal", "UTC±00:00"],
		["Serbia", "UTC+01:00"],
		["Seychelles", "UTC+04:00"],
		["Sierra Leone", "UTC±00:00"],
		["Singapore", "UTC+08:00"],
		["Slovakia", "UTC+01:00"],
		["Slovenia", "UTC+01:00"],
		["South Africa", "UTC+02:00"],
		["South Korea", "UTC+09:00"],
		["Spain", "UTC+01:00"],
		["Sri Lanka", "UTC+05:30"],
		["Sudan", "UTC+02:00"],
		["Suriname", "UTC−03:00"],
		["Sweden", "UTC+01:00"],
		["Switzerland", "UTC+01:00"],
		["Syria", "UTC+02:00"],
		["Taiwan", "UTC+08:00"],
		["Tajikistan", "UTC+05:00"],
		["Tanzania", "UTC+03:00"],
		["Thailand", "UTC+07:00"],
		["Togo", "UTC±00:00"],
		["Tonga", "UTC+13:00"],
		["Trinidad &amp; Tobago", "UTC−04:00"],
		["Tunisia", "UTC+01:00"],
		["Turkey", "UTC+03:00"],
		["Turkmenistan", "	UTC+05:00"],
		["Uganda", "UTC+03:00"],
		["Ukraine", "UTC+02:00"],
		["United Arab Emirates", "UTC+04:00"],

		["United Kingdom", "UTC±00:00"],
		["UK", "UTC±00:00"],
		["U.K", "UTC±00:00"],
		["England", "UTC±00:00"],

		["London", "UTC+00:00"],
		["Liverpool", "UTC+00:00"],
		["Manchester", "UTC+00:00"],
		["Paris", "UTC+01:00"],
		["Berlin", "UTC+01:00"],
		["Amsterdam", "UTC+01:00"],
		["Milan", "UTC+01:00"],
		["Rome", "UTC+01:00"],
		["Munich", "UTC+01:00"],
		["Dublin", "UTC+01:00"],

		["Alabama", "UTC−06:00"],
		["AL", "UTC−06:00"],

		["Alaska", "UTC−09:00"],
		["AK", "UTC−09:00"],

		["Arizona", "UTC−07:00"],
		["AZ", "UTC−07:00"],

		["Arkansas", "UTC−06:00"],
		["AR", "UTC−06:00"],

		["California", "UTC−08:00"],
		["CA", "UTC−08:00"],

		["Colorado", "UTC−07:00"],
		["CO", "UTC−07:00"],

		["Connecticut", "UTC−05:00"],
		["CT", "UTC−05:00"],

		["Delaware", "UTC−05:00"],
		["DE", "UTC−05:00"],

		["Florida", "UTC−05:00"],
		["FL", "UTC−05:00"],

		["Georgia", "UTC−05:00"],
		["GA", "UTC−05:00"],

		["Hawaii", "UTC−10:00"],
		["HI", "UTC−10:00"],

		["Idaho", "UTC−07:00"],
		["ID", "UTC−07:00"],

		["Illinois", "UTC−06:00"],
		["IL", "UTC−06:00"],

		["Indiana", "UTC−05:00"],
		["IN", "UTC−05:00"],

		["Iowa", "UTC−06:00"],
		["IA", "UTC−06:00"],

		["Kansas", "UTC−06:00"],
		["KS", "UTC−06:00"],

		["Kentucky", "UTC−05:00"],
		["KY", "UTC−05:00"],

		["Louisiana", "UTC−06:00"],
		["LA", "UTC−06:00"],

		["Maine", "UTC−05:00"],
		["ME", "UTC−05:00"],

		["Maryland", "UTC−05:00"],
		["MD", "UTC−05:00"],

		["Massachusetts", "UTC−05:00"],
		["MA", "UTC−05:00"],

		["Michigan", "UTC−05:00"],
		["MI", "UTC−05:00"],

		["Minnesota", "UTC−06:00"],
		["MN", "UTC−06:00"],

		["Mississippi", "UTC−06:00"],
		["MS", "UTC−06:00"],

		["Missouri", "UTC−06:00"],
		["MO", "UTC−06:00"],

		["Montana", "UTC−07:00"],
		["MT", "UTC−07:00"],

		["Nebraska", "UTC−06:00"],
		["NE", "UTC−06:00"],

		["Nevada", "UTC−08:00"],
		["NV", "UTC−08:00"],

		["New Hampshire", "UTC−05:00"],
		["NH", "UTC−05:00"],

		["New Jersey", "UTC−05:00"],
		["NJ", "UTC−05:00"],

		["New Mexico", "UTC−07:00"],
		["NM", "UTC−07:00"],

		["New York", "UTC−05:00"],
		["NY", "UTC−05:00"],

		["North Carolina", "UTC−05:00"],
		["NC", "UTC−05:00"],

		["North Dakota", "UTC−06:00"],
		["ND", "UTC−06:00"],

		["Ohio", "UTC−05:00"],
		["OH", "UTC−05:00"],

		["Oklahoma", "UTC−06:00"],
		["OK", "UTC−06:00"],

		["Oregon", "UTC−08:00"],
		["OR", "UTC−08:00"],

		["Pennsylvania", "UTC−05:00"],
		["PA", "UTC−05:00"],

		["Rhode Island", "UTC−05:00"],
		["RI", "UTC−05:00"],

		["South Carolina", "UTC−05:00"],
		["SC", "UTC−05:00"],

		["South Dakota", "UTC−06:00"],
		["SD", "UTC−06:00"],

		["Tennessee", "UTC−06:00"],
		["TN", "UTC−06:00"],

		["Texas", "UTC−06:00"],
		["TX", "UTC−06:00"],

		["Utah", "UTC−07:00"],
		["UT", "UTC−07:00"],

		["Vermont", "UTC−05:00"],
		["VT", "UTC−05:00"],

		["Virginia", "UTC−05:00"],
		["VA", "UTC−05:00"],

		["Washington", "UTC−08:00"],
		["WA", "UTC−08:00"],

		["West Virginia", "UTC−08:00"],
		["WV", "UTC−08:00"],

		["Wisconsin", "UTC−06:00"],
		["WI", "UTC−06:00"],

		["Wyoming", "UTC−07:00"],
		["WY", "UTC−07:00"],

		["United States", "UTC−07:00"],
		["US", "UTC−07:00"],
		[ "U.S", "UTC−07:00"],
		[ "USA", "UTC−07:00"],
		[ "U.S.A", "UTC−07:00"],


		["Uruguay", "UTC−03:00"],
		["Uzbekistan", "UTC+05:00"],
		["Venezuela", "UTC−04:00"],
		["Vietnam", "UTC+07:00"],
		["Yemen", "UTC+03:00"],
		["Zambia", "UTC+02:00"],
		["Zimbabwe", "UTC+02:00"];

		chrome.storage.sync.set({ countries: country_list });

    }else if(details.reason == "update"){
        // might need to add cities etc in future
        chrome.storage.sync.get('country_list', function(data) {
            console.log(data)
        });
    }
});
