const isValid = (value: unknown) => 
    typeof value !== 'undefined' || value !== null;

const getFieldValue = (key: string, fieldsObj: unknown) => {
    if (fieldsObj) {
        let val = null;
        const pathElems = key.split('.');

        for(const pathElem of pathElems) {
            val = val ? val[pathElem] : fieldsObj[pathElem];
        }

        if (isValid(val)) {
            return val;
        }
    }

    return null;
}

const slugify = str =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

export {
    getFieldValue,
    slugify
};