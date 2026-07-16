function flattenArray(array) {
    const result = [];

    for (const element of array) {
        if (Array.isArray(element)) {
            result.push(...flattenArray(element));
        } else {
            result.push(element);
        }
    }

    return result;
}