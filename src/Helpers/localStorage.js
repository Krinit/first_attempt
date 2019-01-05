// export const loadState = () => {
//     try {
//         const serializedState = localStorage.getItem('user');
//         if (serializedState === null) {
//             console.log("Unable to load state!")
//             return undefined;
//         }
//         return JSON.parse(serializedState);
//     } catch (err) {
//         console.log("Unable to load state!")
//         return undefined;
//     }
// };

export const setUser = () => {
    const person = [
        {
            username: "Admin",
            password: 12345
        },
        {
            username: "Admin2",
            password: 54321
        }
    ]
    localStorage.setItem('user', JSON.stringify(person));
}
