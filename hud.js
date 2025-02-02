﻿var HUD = new Vue({
    el: ".inGameHud",
    data: {
        show: false,
        ammo: 0,
        money: "117 000 000",
        bank: 0,
        mic: false,
        time: "00:00",
        date: "00.00.00",
        street: "3oxaan",
        crossingRoad: "Groups",
        server: 0,
		playerId : 0,
        online: 0,
        inVeh: false,
		belt: false,
        engine: false,
        doors: false,
        speed: 0,
        fuel: 0,
        hp: 0,
    },
    methods: {
        setTime: (time, date) => {
            this.time = time;
            this.date = date;
        }, 
        updateSpeed(currentspeed, maxspeed = 240)
        {
            this.speed = currentspeed;
            const meters = document.querySelectorAll('svg[data-value] #hud-speedometer');

            meters.forEach( (path) => {
            
                let length = path.getTotalLength();
                

            
                let c = parseInt(path.parentNode.getAttribute('data-value'));
                
                let value = 0.4166666666666667 * c;
                let rotate = -130 + (value * 2.61153846153846);
                
                let to = length * ((100 - value) / 100);
                //alert(to);
                path.getBoundingClientRect();
                
                path.style.strokeDashoffset = Math.max(0, to);  
            });
        }
    }
})