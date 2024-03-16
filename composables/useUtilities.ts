export const useUtilities = () => {
    function getYear(date: string) {
        return date ? date.split('-')[0] : '';
    }

    function shuffleArrays(array1:Array<Object>, array2:Array<Object>) {
        // Combine the arrays
        if(!array1 || !array2) return [];
        const combinedArray = array1.concat(array2);

        // Fisher-Yates shuffle algorithm
        for (let i = combinedArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
            [combinedArray[i], combinedArray[j]] = [combinedArray[j], combinedArray[i]]; // Swap elements
        }

        return combinedArray;
    }

    function nameFormatter(firstName:string, lastName:string) {
        let fullName = `${firstName} ${lastName}`
        if(fullName.length > 20){
            const parts = fullName.split(' ');
            const shortenedFirstName = parts[0].charAt(0) + '.';
            const shortenedMiddleName = parts.length > 2 ? ' ' + parts[1].charAt(0) + '.' : '';
            const lastName = parts[parts.length - 1];

            fullName = `${shortenedFirstName}${shortenedMiddleName} ${lastName}`
        }
        return fullName
    }

    function generateRandomArr(lastValue:number) {
        const possibilities = [
            [7, 5],
            [5, 7],
            [4, 8],
            [8, 4],
            [6, 6],
            [4, 4, 4]
            // Add more possible combinations as needed
        ];

        let randomIndex = -1;
        let value = null;

        do{
            randomIndex = Math.floor(Math.random() * possibilities.length);
        } while(lastValue == randomIndex)

        value = possibilities[randomIndex]

        return {value, randomIndex};
    }

    function clipTextWithEllipsis(text:string, maxLength:number) {
        if (text && text.length > maxLength) {
            return text.slice(0, maxLength - 3) + '...';
        }
        return text;
    }

    return {
        getYear,
        shuffleArrays,
        nameFormatter,
        clipTextWithEllipsis,
        generateRandomArr
    }
}