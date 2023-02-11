let TigerScoreBtnOne = document.getElementById("Tiger-score-btn-0")
let TigerStoreEl = document.getElementById("Tiger-score")
let TigerScore = 0



function increaseTigerScoreOne(){
    TigerStoreEl.textContent = TigerScore
    TigerScore += 1
    
}

function increaseTigerScoreTwo(){
    TigerScore += 1
    TigerStoreEl.textContent = TigerScore
    TigerScore += 0 

}
function increaseTigerScoreThree(){
    TigerScore += 3
    TigerStoreEl.textContent = TigerScore
    TigerScore += 0   
}

increaseTigerScoreOne()


let LionScoreBtnOne = document.getElementById("Lion-score-btn-0")
let LionStoreEl = document.getElementById("Lion-score")
let LionScore = 0

function increaseLionScoreOne(){
    LionStoreEl.textContent = LionScore
    LionScore += 1  
    
}

function increaseLionScoreTwo(){
    LionScore += 1
    LionStoreEl.textContent = LionScore
    LionScore += 0 

}
function increaseLionScoreThree(){
    LionScore += 3
    LionStoreEl.textContent = LionScore
    LionScore += 0   
}

increaseLionScoreOne()
