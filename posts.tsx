import { Helper } from "./helper";
import axios from "axios"

export class Posts{
    // Setting class variables
    public help = new Helper();

    // Here we create question question method
    public q1(obj) : any {
        var help = new Helper();
        var last25 = this.help.last25(obj);
        // Here we return
        return this.procurr(last25, help);
        // return last25;
    }

    // Here we create question question method
    public q2(obj) : any {
        var help = new Helper();
        var byDate = async function(ob){
            var sorted = help.sortbyDate(ob);
            return this.procurr(sorted, help);
        }

        return byDate(obj);
    }

    // Here we create question question method
    public q3(obj) : any {
        var help = new Helper();
        var sorted : any = help.sortbyKarma(obj);
        if(sorted.length > 0){
            return this.procurr(sorted, help);
        }
        return {};
    }
    
    // Top 10 individual processor
    private procurr(obj, help : Helper){
        // Here we start processing
        const mainObj = async function(ob) {
            var robj : any = [];
            var allt : any = [];
            var it;
            var i : number = 0;
            var total : number = 10;
            var getItem;
            try{
                for(it in ob){
                    // getItem = ob[it];
                    let res2 = await axios.get('https://hacker-news.firebaseio.com/v0/item/'+ob[it]+'.json');
                    const obji = await res2.data;
                    var word : string = help.mode(help.wordx(obji.title));
                    if(word.length > 1){
                        if(i < total){
                            if(robj.length < 1){
                                robj[i] = {'word': word, 'score':1}
                            }
                            else{
                                robj[i] = (help.inArr(word, robj)) ? help.incScore(robj[i]) : {'word': word, 'score':1};
                            }

                            // increment
                            i++;
                        }
                    }
                }
            }catch(error){
                console.error(error);
            }
            // Here we return
            return JSON.parse(JSON.stringify(robj));       
        }

        // Here we return main
        return mainObj(obj);
    }
    
    
}