const initialState = {
    auctionProducts:[
        {
            title:'White roses',
            baseprice:100
        },
        {
            title:'Tulips',
            baseprice:200
        },
        {
            title:'Sunflowes',
            baseprice:150
        }
    ],
    currentAuctionProduct:{
        title:'',
        baseprice:0,
        currentPrice:0
    }
}

export const board = (state=initialState,action)=>{
    return state
}