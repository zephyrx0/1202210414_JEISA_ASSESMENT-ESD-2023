function analyzeReviews(reviews) {
    if (!reviews || reviews.length === 0) {
        return null;
    }

    // Mencari rating terendah, rating tertinggi, dan menghitung rata-rata rating
    const lowestRating = Math.min(...reviews);
    const highestRating = Math.max(...reviews);
    const averageRating = reviews.reduce((sum, rating) => sum + rating, 0) / reviews.length;

    // Membulatkan rata-rata rating menjadi 1 digit di belakang koma
    const roundedAverage = Math.round(averageRating * 10) / 10;

    return [lowestRating, highestRating, roundedAverage];
}

// Contoh penggunaan fungsi dengan input yang diberikan
const example1 = [4.5, 2.0, 1.5, 3.0, 2.5, 4.0, 5.0, 3.5, 2.0, 1.0];
const result1 = analyzeReviews(example1);
console.log(result1);

const example2 = [5,4,2.5,5,3.6,1.1,3.6,4,4.2,1.5];
const result2 = analyzeReviews(example2);
console.log(result2);

