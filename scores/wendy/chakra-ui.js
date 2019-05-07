let tile_offset = 2000;


function makeJSON()
{
    return {
        "*" : [{
            "key": "svg",
            "val": [{
                "new":  "g",
                "id": "tile_score"            
            },
            {
                "parent": "tile_score",
                "new":  "image",
                "id": "root",
                "href": "scores/wendy/root-01.jpg",
                "x":0,
                "y":100,
                "width": 800           
            },
            {
                "parent": "tile_score",
                "new":  "image",
                "id": "sacral",
                "href": "scores/wendy/sacral-01.jpg",
                "x":2000,
                "y":100,
                "width": 800
            },
            {
                "parent": "tile_score",
                "new":  "image",
                "id": "heart",
                "href": "scores/wendy/heart-01.jpg",
                "x":4000,
                "y":100,
                "width": 800
            },
            {
                "parent": "tile_score",
                "new":  "image",
                "id": "throat",
                "href": "scores/wendy/throat-01.jpg",
                "x":6000,
                "y":100,
                "width": 800
            },
            {
                "parent": "tile_score",
                "new":  "image",
                "id": "solar",
                "href": "scores/wendy/solar-01.jpg",
                "x":8000,
                "y":100,
                "width": 800
            },
            {
                "parent": "tile_score",
                "new":  "image",
                "id": "brow",
                "href": "scores/wendy/brow-01.jpg",
                "x":10000,
                "y":100,
                "width": 800
            },
            {
                "parent": "tile_score",
                "new":  "image",
                "id": "crown",
                "href": "scores/wendy/crown-01.jpg",
                "x":12000,
                "y":100,
                "width": 800
            }]
        }, {
            "key" : "tween",
            "val" : {
                "id" : "tile_timeline",
                "init" : {
                    "paused" : "true"
                },
                "tweens" : [
                    {
                        "target" : "#tile_score",
                        "dur" : 1
                    },
                    {
                        "target" : "#tile_score",
                        "dur" : 0.0001,
                        "vars" : {
                            "x": "-= 2000"
                        }
                    },
                    {
                        "target" : "#tile_score",
                        "dur" : 1
                    },
                    {
                        "target" : "#tile_score",
                        "dur" : 0.0001,
                        "vars" : {
                            "x": "-= 2000"
                        }
                    },
                    {
                        "target" : "#tile_score",
                        "dur" : 1
                    },
                    {
                        "target" : "#tile_score",
                        "dur" : 0.0001,
                        "vars" : {
                            "x": "-= 2000"
                        }
                    },{
                        "target" : "#tile_score",
                        "dur" : 1
                    },
                    {
                        "target" : "#tile_score",
                        "dur" : 0.0001,
                        "vars" : {
                            "x": "-= 2000"
                        }
                    },{
                        "target" : "#tile_score",
                        "dur" : 1
                    },
                    {
                        "target" : "#tile_score",
                        "dur" : 0.0001,
                        "vars" : {
                            "x": "-= 2000"
                        }
                    },{
                        "target" : "#tile_score",
                        "dur" : 1
                    },
                    {
                        "target" : "#tile_score",
                        "dur" : 0.0001,
                        "vars" : {
                            "x": "-= 2000"
                        }
                    },{
                        "target" : "#tile_score",
                        "dur" : 1
                    },
                    {
                        "target" : "#tile_score",
                        "dur" : 0.0001,
                        "vars" : {
                            "x": "-= 2000"
                        }
                    },{
                        "target" : "#tile_score",
                        "dur" : 1
                    },
                    {
                        "target" : "#tile_score",
                        "dur" : 0.0001,
                        "vars" : {
                            "x": "-= 2000"
                        }
                    }
                ]
                
            }
        }]
    };
}