d3.csv("EarthQuake1.csv", function(error, rows){
    if(error) throw error;
    console.log(rows)
    function unpack(rows,key){
        return rows.map(function(row){
            return row[key];
        });
    }
    var data = [
        {
            type : "scattermapbox",
            text : unpack(rows, "Magnitude"),
            text: unpack(rows,"Type"),
            lon: unpack(rows, "Longitude"),
            lat: unpack(rows, "Latitude"),
            //name: unpack(rows,"Type"),
            marker: {color : "red", size: 10}

        }
    ];
    var layout = {
        //dragmode: "zoom",
       // mapbox: { style: "stamen-terrain", center: {lat: 38 , lon: -90}, zoom:3},
        //margin: {r: 0 , t: 0, b: 0, l: 0},
        height : 800,
        // top, bottom, left and right margins
        margin : {t: 0, b: 0, l: 0, r:  0},
        font : {color: '#FFFFFF', size: 11},
        paper_bgcolor : '#000000',
        mapbox : {
        //here you need the token from Mapbox
        accesstoken : 'pk.eyJ1IjoibGthbGFsYTAiLCJhIjoiY2sxZ3ZtbHZ5MTh3MDNtcDZ2czVndmt6dyJ9.Z98oEc70T8TKSj-8E24MDg',
        bearing : 0,
        //where we want the map to be centered
            center : {
                lat : 38,
                lon : -94}
            ,
        // we want the map to be "parallel" to our screen, with no angle
        pitch: 0,
        // default level of zoom
        zoom: 3,
        // default map style
         style: 'dark'},
    
    
        
        buttons: [
                {
                    args: ['mapbox.style', 'dark'],
                    label: 'Dark',
                    method:'relayout'
                }
                    
                , 
                {
                    args:['mapbox.style', 'light'],
                    label:'Light',
                    method:'relayout'
                },
                {
                    args:['mapbox.style', 'outdoors'],
                    label:'Outdoors',
                    method:'relayout'

                }                   
                ,
                {
                    args:['mapbox.style', 'satellite-streets'],
                    label:'Satellite with Streets',
                    method:'relayout'
                }
                                   
            ],
        // direction where I want the menu to expand when I click on it
        direction : 'up',
          
        // here I specify where I want to place this drop-down on the map
            x: 0.75,
            xanchor:  'left',
            y : 0.05,
            yanchor:  'bottom',
          
        // specify font size and colors
            bgcolor: '#000000',
            bordercolor : '#FFFFFF',
            font: {size: 11}
    };

    Plotly.newPlot("map", data , layout)
})