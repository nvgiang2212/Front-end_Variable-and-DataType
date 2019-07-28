
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
    let message: string;
    let total: number = 100;
    let isProduction = true;
    let prices: Array<number> = [120, 88, 60];
    let languages: string[] = ['vi','en-us'];
    let now = new Date();
    let unknown: any;

    enum Direction {
        UP,
        DOWN,
        LEFT,
        RIGHT
    }
    
    function log(msg: string): void {
        console.log(msg);
    }

    interface IPost {
        id: string;
        title: string;
        body?: string;
    }

    isProduction = false;
    unknown = Direction.UP;
    unknown = 'changed';

    // const post:IPost = {
    //
    // };
    // const message = 50;
    
    function getPost(postId: string): IPost {
        return {
            id: postId,
            title: "Post Title",
            body: "Post Body",
            extra: 'data'
        } as IPost;
    }
}

main();