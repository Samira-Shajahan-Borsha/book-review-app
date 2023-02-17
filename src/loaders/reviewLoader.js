export const reviewLoader = async () => {
    const loadReview = await fetch('data.json');
    const allReviews = await loadReview.json();
    return allReviews;
}