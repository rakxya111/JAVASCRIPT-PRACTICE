function testPattern(){

    let inputText = document.getElementById('inputText').value;

    let pattern1 = /foo?/;
    let pattern2 = /fo+/;
    let pattern3 = /fo*d/;
    let pattern4 = /fo{3}d/;
    let pattern5 = /fo{2,4}d/;
    let pattern6 = /fo{2,}d/;

    let result1 = pattern1.test(inputText);
    let result2 = pattern2.test(inputText);
    let result3 = pattern3.test(inputText);
    let result4 = pattern4.test(inputText);
    let result5 = pattern5.test(inputText);
    let result6 = pattern6.test(inputText);

    document.getElementById('result1').innerHTML = result1 ? " match : foo?" : "foo? No Match";
    document.getElementById('result2').innerHTML = result2 ? "fo+: Match" :"fo+: No match";
    document.getElementById('result3').innerHTML = result3 ? "fo*d: Match": "fo*d: No match";
    document.getElementById('result4').innerHTML = result4 ? "fo{3}d" :"fo{3}d: No match";
    document.getElementById('result5').innerHTML = result5 ? "fo{2,4}d:Match" : "fo{2,4}d: No match";
    document.getElementById('result6').innerHTML = result6 ? "fo{2,}d:Match" : "fo{2,}d: No match";
}