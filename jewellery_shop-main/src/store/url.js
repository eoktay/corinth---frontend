
export const loadAllProducts =
    index => `order?skip=${index}&limit=10`;
export const loadFinishedProducts =
    index => `order?skip=${index}&limit=10&finished=true`;
export const loadUnFinishedProducts =
    index => `order?skip=${index}&limit=10&finished=false`;