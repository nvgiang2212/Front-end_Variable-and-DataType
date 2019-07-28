/**
* Variable and Data Type
 */
/**
 * var vs let/const
 * */
// function main() {
//     console.log("START");
//     if (true) {
//         var lang = "vi";
//         var target = "en-us";
//         console.log("inside block");
//         console.log(target);
//     }
//     console.log(lang);
//     console.log(target);
// }
// function main() {
//     var x = 5;
//     console.log(x);
//     var x =10;
//     console.log(x);
//
//     let y = 55;
//     console.log(y);
//     let y1 = 100;
//     console.log(y1);
// }
// function main() {
//     console.log(x);
//     var x = 5;
//
//     let y = 10;
//     console.log(y);
// }
/**
 * Data Types
 * */
function main() {
    var message;
    var total = 100;
    var isProduction = true;
    var prices = [120, 88, 60];
    var languages = ['vi', 'en-us'];
    var now = new Date();
    var unknown;
    var Direction;
    (function (Direction) {
        Direction[Direction["UP"] = 0] = "UP";
        Direction[Direction["DOWN"] = 1] = "DOWN";
        Direction[Direction["LEFT"] = 2] = "LEFT";
        Direction[Direction["RIGHT"] = 3] = "RIGHT";
    })(Direction || (Direction = {}));
    function log(msg) {
        console.log(msg);
    }
    isProduction = false;
    unknown = Direction.UP;
    unknown = 'changed';
    // const post:IPost = {
    //
    // };
    // const message = 50;
    function getPost(postId) {
        return {
            id: postId,
            title: "Post Title",
            body: "Post Body",
            extra: 'data'
        };
    }
}
main();
