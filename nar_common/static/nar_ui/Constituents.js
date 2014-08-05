var nar = nar || {};
(function() {
    /**
     * A map of a constituent's programmatic identifier to its metadata
     */
    nar.Constituents = {
		ammonia : {
            color : '',
            //R-Color:unknown
            name : 'Ammonia'
        },
        orthoP : {
            color : '',
            //R-Color:unknown
            name : 'orthoP'
        },
        nitrogen : {
            color : '#6E8B3D',
            //R-Color:darkolivegreen4
            name : 'Total Nitrogen'
        },
        pesticides : {
            color : '#008080',
            name: 'Pesticides'
        },
        ecology : {
            color : '#808000',
            name : 'Ecology'
        },
        nitrate : {
        	color : '#7FFF00',
        	//R-Color:chartreuse1
            name : 'Nitrate'
        },
        phosphorus : {
            color : '#698B69',
            //R-Color:darkgreenseagreen4
            name : 'Total Phosphorus'
        },
        sediment : {
            color : '#8B0000',
            //R-Color:darkred
            name : 'Suspended Sediment'
        },
        streamflow : {
            color : '#0000CD',
            //R-Color:mediumblue
            name : 'Streamflow'
        }
    };

})();
