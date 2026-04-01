#include <iostream>
using namespace std;

int main() {
    int data[8]; // Array to hold the encoded data (indexing starts from 1)
    int dataatrec[8], c, c1, c2, c3, i;

    // Input data bits
    cout << "Enter 4 bits of data one by one (positions 7, 6, 5, and 3):\n";
    cin >> data[7];  // Data bit 1
    cin >> data[6];  // Data bit 2
    cin >> data[5];  // Data bit 3
    cin >> data[3];  // Data bit 4

    // Calculation of parity bits
    data[4] = data[5] ^ data[6] ^ data[7];  // Parity bit 1
    data[2] = data[3] ^ data[6] ^ data[7];  // Parity bit 2
    data[1] = data[3] ^ data[5] ^ data[7];  // Parity bit 3

    // Output the encoded data
    cout << "\nEncoded data is:\n";
    for (i = 1; i <= 7; i++) {
        cout << data[i];
    }

    // Input received data
    cout << "\n\nEnter received data bits one by one (positions 7, 6, 5, 4, 3, 2, 1):\n";
    for (i = 1; i <= 7; i++) {
        cin >> dataatrec[i];
    }

    // Calculate the syndrome bits
    c1 = dataatrec[1] ^ dataatrec[3] ^ dataatrec[5] ^ dataatrec[7];  // Check bit 1
    c2 = dataatrec[2] ^ dataatrec[3] ^ dataatrec[6] ^ dataatrec[7];  // Check bit 2
    c3 = dataatrec[4] ^ dataatrec[5] ^ dataatrec[6] ^ dataatrec[7];  // Check bit 3

    // Calculate error position (c is a 3-bit number)
    c = c3 * 4 + c2 * 2 + c1;

    // Error detection and correction
    if (c == 0) {
        cout << "\nCongratulations, there is no error.";
    } else {
        cout << "\nError at position: " << c;
        cout << "\nCorrected message is:\n";
        // Flip the erroneous bit
        if (dataatrec[c] == 0) {
            dataatrec[c] = 1;
        } else {
            dataatrec[c] = 0;
        }

        // Output the corrected data
        for (i = 1; i <= 7; i++) {
            cout << dataatrec[i];
        }
    }

    return 0;
}
