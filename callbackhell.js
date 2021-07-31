//counting reversly from 10 to 1  print Happy Independence Day on HTML Page
const container = document.createElement('div');
container.innerText=10

let counts=10;
setTimeout(()=>{container.innerText = --counts ;
    setTimeout(()=>{container.innerText = -- counts ;
          setTimeout(()=>{container.innerText = -- counts;
                setTimeout(()=>{container.innerText = -- counts ;
                        setTimeout(()=>{container.innerText = -- counts ;
                            setTimeout(()=>{container.innerText = -- counts ;
                                setTimeout(()=>{container.innerText = -- counts ;
                                    setTimeout(()=>{container.innerText = -- counts ;
                                        setTimeout(()=>{ container.innerText = -- counts ;
                                            setTimeout(()=>{container.innerText=" Happy Independence Day"},5000)
                                                        },1000)
                                                    },1000)
                                                },1000)
                                            },1000)
                                        },1000)
                                  },1000)
                             },1000)
                         },1000)
                 },1000)
document.body.append(container)