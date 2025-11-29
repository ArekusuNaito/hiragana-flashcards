export interface HiraganaChar {
    char: string;
    romaji: string;
    group: string;
}

export const hiraganaData: HiraganaChar[] = [
    // Vowels
    { char: 'あ', romaji: 'a', group: 'Vowels' }, { char: 'い', romaji: 'i', group: 'Vowels' }, { char: 'う', romaji: 'u', group: 'Vowels' }, { char: 'え', romaji: 'e', group: 'Vowels' }, { char: 'お', romaji: 'o', group: 'Vowels' },
    // K
    { char: 'か', romaji: 'ka', group: 'K-Group' }, { char: 'き', romaji: 'ki', group: 'K-Group' }, { char: 'く', romaji: 'ku', group: 'K-Group' }, { char: 'け', romaji: 'ke', group: 'K-Group' }, { char: 'こ', romaji: 'ko', group: 'K-Group' },
    // S
    { char: 'さ', romaji: 'sa', group: 'S-Group' }, { char: 'し', romaji: 'shi', group: 'S-Group' }, { char: 'す', romaji: 'su', group: 'S-Group' }, { char: 'せ', romaji: 'se', group: 'S-Group' }, { char: 'そ', romaji: 'so', group: 'S-Group' },
    // T
    { char: 'た', romaji: 'ta', group: 'T-Group' }, { char: 'ち', romaji: 'chi', group: 'T-Group' }, { char: 'つ', romaji: 'tsu', group: 'T-Group' }, { char: 'て', romaji: 'te', group: 'T-Group' }, { char: 'と', romaji: 'to', group: 'T-Group' },
    // N
    { char: 'な', romaji: 'na', group: 'N-Group' }, { char: 'に', romaji: 'ni', group: 'N-Group' }, { char: 'ぬ', romaji: 'nu', group: 'N-Group' }, { char: 'ね', romaji: 'ne', group: 'N-Group' }, { char: 'の', romaji: 'no', group: 'N-Group' },
    // H
    { char: 'は', romaji: 'ha', group: 'H-Group' }, { char: 'ひ', romaji: 'hi', group: 'H-Group' }, { char: 'ふ', romaji: 'fu', group: 'H-Group' }, { char: 'へ', romaji: 'he', group: 'H-Group' }, { char: 'ほ', romaji: 'ho', group: 'H-Group' },
    // M
    { char: 'ま', romaji: 'ma', group: 'M-Group' }, { char: 'み', romaji: 'mi', group: 'M-Group' }, { char: 'む', romaji: 'mu', group: 'M-Group' }, { char: 'め', romaji: 'me', group: 'M-Group' }, { char: 'も', romaji: 'mo', group: 'M-Group' },
    // Y
    { char: 'や', romaji: 'ya', group: 'Y-Group' }, { char: 'ゆ', romaji: 'yu', group: 'Y-Group' }, { char: 'よ', romaji: 'yo', group: 'Y-Group' },
    // R
    { char: 'ら', romaji: 'ra', group: 'R-Group' }, { char: 'り', romaji: 'ri', group: 'R-Group' }, { char: 'る', romaji: 'ru', group: 'R-Group' }, { char: 'れ', romaji: 're', group: 'R-Group' }, { char: 'ろ', romaji: 'ro', group: 'R-Group' },
    // W / N
    { char: 'わ', romaji: 'wa', group: 'W-Group' }, { char: 'を', romaji: 'wo', group: 'W-Group' }, { char: 'ん', romaji: 'n', group: 'N-Group' },
    // G (Dakuten)
    { char: 'が', romaji: 'ga', group: 'G-Group' }, { char: 'ぎ', romaji: 'gi', group: 'G-Group' }, { char: 'ぐ', romaji: 'gu', group: 'G-Group' }, { char: 'げ', romaji: 'ge', group: 'G-Group' }, { char: 'ご', romaji: 'go', group: 'G-Group' },
    // Z (Dakuten)
    { char: 'ざ', romaji: 'za', group: 'Z-Group' }, { char: 'じ', romaji: 'ji', group: 'Z-Group' }, { char: 'ず', romaji: 'zu', group: 'Z-Group' }, { char: 'ぜ', romaji: 'ze', group: 'Z-Group' }, { char: 'ぞ', romaji: 'zo', group: 'Z-Group' },
    // D (Dakuten)
    { char: 'だ', romaji: 'da', group: 'D-Group' }, { char: 'ぢ', romaji: 'ji', group: 'D-Group' }, { char: 'づ', romaji: 'zu', group: 'D-Group' }, { char: 'で', romaji: 'de', group: 'D-Group' }, { char: 'ど', romaji: 'do', group: 'D-Group' },
    // B (Dakuten)
    { char: 'ば', romaji: 'ba', group: 'B-Group' }, { char: 'び', romaji: 'bi', group: 'B-Group' }, { char: 'ぶ', romaji: 'bu', group: 'B-Group' }, { char: 'べ', romaji: 'be', group: 'B-Group' }, { char: 'ぼ', romaji: 'bo', group: 'B-Group' },
    // P (Handakuten)
    { char: 'ぱ', romaji: 'pa', group: 'P-Group' }, { char: 'ぴ', romaji: 'pi', group: 'P-Group' }, { char: 'ぷ', romaji: 'pu', group: 'P-Group' }, { char: 'ぺ', romaji: 'pe', group: 'P-Group' }, { char: 'ぽ', romaji: 'po', group: 'P-Group' }
];
