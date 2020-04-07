var PenguinPromise = d3.json("classData.json");

//success
var PengSuccess = function(penguin)
{
    console.log("Success", penguin);
}

//failure
var PengFail = function(error)
{
    console.log("Something went wrong", error)
}

PenguinPromise.then(PengSuccess,PengFail)