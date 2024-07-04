export const useGetImage = (image_name: string, isImg: boolean) => {
    let imagePath = '';

    if(isImg) {
        return `/src/assets/images/${image_name}.png`;
    } else {
       return `/src/assets/svg/${image_name}.svg`;
    }
}