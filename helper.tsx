import axios from "axios"

export class Helper{

    // Here we construct mode
    public mode(arr:string[]) : any {
        return arr.sort((a,b) =>
              arr.filter(v => v===a).length
            - arr.filter(v => v===b).length
        ).pop();
    }

    // Here we construct statement breaker
    public wordx(str : string) : any {
        var lo = str.toLowerCase();
        return lo.split(/\b/);
    }

    // Here we construct sorts
    public sortbyID(str:any, order:string = "asc") : any {
        var sorted:string[];

        // Here we check order
        if(order = "asc"){
            sorted = str.sort(function(a, b) {
                return parseFloat(a.id) - parseFloat(b.id);
            });
        }
        else if(order = "desc"){
            sorted = str.sort((a, b) => parseFloat(b.id) - parseFloat(a.id));
        }
    
    }

    public sortbyDate(obj) {
        var sortDate = async function(ob){
            var sorted : string[] = [];
            var s : any;
            for(s in ob){
                let res = await axios.get('https://hacker-news.firebaseio.com/v0/item/'+s+'.json');
                const obi = await res.data;
                var nobj = JSON.parse(JSON.stringify(obi))[0];
                var days = this.daysElapse(nobj.time);
                if(days >= 7){
                    sorted.push(s);
                }
            }
            // Async return
            // return sorted;
            return sorted;
        }

        return sortDate(obj);
    }

    public async sortbyKarma(obj) {
        var sorted : string[] = [];
        var s : any;
        for(s in obj){
            const res = await axios.get('https://hacker-news.firebaseio.com/v0/item/'+s+'.json');
            const ob = await res.data;
            if(this.checkKarma(ob.by)){
                sorted.push(s);
            }
        }

        return sorted;
    }

    private async checkKarma(id){
        var qualify = false;
        var num = 10.000;
        const res = await axios.get('https://hacker-news.firebaseio.com/v0/user/'+id+'.json');
        const obj = await res.data;
        if(obj.karma >= num){
            qualify = true;
        }
        return qualify;
    }

    public last25(str:string[]) : any {
        return str.slice(str.length - 25);
        // return {"name" : "Chinedu"};
    }

    public obj2Arr(obj) : any {
        return Object.entries(obj);
    }

    public inArr(index:string, arr:string[]){
        var hasin : boolean = false;
        var str : any;
        if(arr.length > 0){
            for(str in arr){
                var obj = JSON.parse(JSON.stringify(str));
                if(obj.word == index){
                    hasin = true;
                    break;
                }
            }
        }

        return hasin;
    }

    public incScore(obj){
        var nobj = JSON.parse(JSON.stringify(obj));
        nobj.score = nobj.score + 1;
        return nobj;
    }

    public daysElapse(timestamp:any) : any {
        var now : any = new Date();
        var before : any = new Date(timestamp);
        return Math.round((now - before) / (1000*60*60*24));
    }


}