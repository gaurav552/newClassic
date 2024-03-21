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

    /**
     * Formats the given first and last names into a shortened full name if the total length is over 20 characters.
     * @param {string} firstName - The first name.
     * @param {string} lastName - The last name.
     * @returns {string} The formatted full name.
     */
    function nameFormatter(firstName: string, lastName: string): string {
        let fullName = `${firstName} ${lastName}`;

        // Shorten the full name if it's over 20 characters
        if (fullName.length > 20) {
            const parts = fullName.split(' ');
            const shortenedFirstName = parts[0].charAt(0) + '.';
            const shortenedMiddleName = parts.length > 2 ? ' ' + parts[1].charAt(0) + '.' : '';
            const finalLastName = parts[parts.length - 1];

            fullName = `${shortenedFirstName}${shortenedMiddleName} ${finalLastName}`;
        }

        return fullName;
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

    function mixArrays(arr1:Array<object>, arr2:Array<object>) {
        const result = [];
        for (let i = 0; i < arr1.length; i++) {
            result.push(arr1[i]);
        }
        for (let i = 0; i < arr2.length; i++) {
            result.push(arr2[i]);
        }
        return result;
    }

    return {
        getYear,
        shuffleArrays,
        nameFormatter,
        clipTextWithEllipsis,
        generateRandomArr,
        mixArrays
    }
}