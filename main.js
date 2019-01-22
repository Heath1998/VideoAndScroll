var app = new Vue({
    el: '#app',
    data: {
        timeList: [],
        clearTime: null,
        timeMessage:[
            {
                timePoint: "00:00:05",
                info: "Please welcome such a Nadella Good morning, and welcome to build 2018. Welcome to Seattle, it's fantastic to see you all back here."
            },
            {
                timePoint: "00:00:10",
                info: "This is time 10 s welcome to build 2019 welcome to build 2019 welcome to build 2019 welcome to build 2019 welcome to build 2019 "
            },
            {
                timePoint: "00:00:15",
                info: "This is time 15 s welcome to build 2019 welcome to build 2019 welcome to build 2019 welcome to build 2019 welcome to build 2019 welcome to build 2019 "
            },
            {
                timePoint: "00:00:20",
                info: "This is time 20 s welcome to build 2019 welcome to build 2019 welcome to build 2019 welcome to build 2019 welcome to build 2019 welcome to build 2019 "
            },
            {
                timePoint: "00:00:25",
                info: "This is time 25 s welcome to build 2019 welcome to build 2019 welcome to build 2019 welcome to build 2019 welcome to build 2019 welcome to build 2019 "
            },
            {
                timePoint: "00:00:30",
                info: "This is time 30 s welcome to build 2019 welcome to build 2019 welcome to build 2019 welcome to build 2019 welcome to build 2019 welcome to build 2019 "
            },
            {
                timePoint: "00:00:35",
                info: "This is time 35 s welcome to build 2019 welcome to build 2019 welcome to build 2019 welcome to build 2019 welcome to build 2019 "
            },
            {
                timePoint: "00:00:40",
                info: "This is time 40 s welcome to build 2019 welcome to build 2019 welcome to build 2019 welcome to build 2019 welcome to build 2019 welcome to build 2019 "
            },
            {
                timePoint: "00:00:45",
                info: "This is time 45 s"
            },
            {
                timePoint: "00:01:05",
                info: "This is time 65 s"
            }
        ]
    },
    methods:{
        //点击跳到相应时间
        setVideoTime(timePoint) {
            var arr = timePoint.split(":");
            var totalTime = 3600*parseInt(arr[0]) + 60*parseInt(arr[1]) + parseInt(arr[2]);
            var vd = document.getElementById("video");
            vd.currentTime = totalTime ;
        },
        //暂停/开始
        change(_video){
            if( _video.paused ){
                _video.play();
                this.addAtribute();
            }else{
                _video.pause();
                clearInterval(this.clearTime);
            }
        },
        //随视频滚动
        addAtribute() {
            var that = this;
            this.clearTime = setInterval(function() {
                var video = document.getElementById("video");
                var childern = document.getElementById("scroll").childNodes;
                var oldNum = -1, newNum = -1;
                for(var i = 0; i < childern.length; ++i) {
                    if(/isactivity/.test(childern[i].getAttribute('class'))) {
                        oldNum = i; 
                    }
                    if(Math.floor(video.currentTime) == that.timeList[i] ) {
                        newNum = i;
                    }
                    childern[i].setAttribute('class', "info-item");
                }
                if(newNum != -1) {
                    childern[newNum].setAttribute('class', "info-item isactivity");
                    document.getElementById("scroll").scrollTop = childern[newNum].offsetTop;
                }
                if(oldNum != -1 && newNum == -1) 
                    childern[oldNum].setAttribute('class', "info-item isactivity");
            }, 1000)
        }          
    },
    mounted() {
        for(var j = 0; j < this.timeMessage.length; ++j ) {
            var arr = this.timeMessage[j].timePoint.split(":");
            this.timeList.push( 3600*parseInt(arr[0]) + 60*parseInt(arr[1]) + parseInt(arr[2]));            
        }
        //控制点击暂停/开始
        var that = this;
        var vide = document.getElementById("video");
        vide.addEventListener('click', function(){
            that.change(vide);
        })
    }
    })