// Sample crypto data matching the screenshot
const cryptoData = [
    {
        name: "Squidward Bikini Ro...",
        image: "https://via.placeholder.com/40/4ade80/ffffff?text=SB",
        time: "18m",
        marketCap: "$15.8K",
        marketCapChange: "+59.4%",
        liquidity: "$17.8K",
        volume: "$9.9K",
        txns: { total: 128, buy: 73, sell: 55 },
        tokenInfo: [
            { value: "21.87%", positive: true },
            { value: "1.36%", positive: true },
            { value: "139", positive: true },
            { value: "0%", positive: false },
            { value: "15.89%", positive: false },
            { value: "77", positive: false },
            { value: "0%", positive: false }
        ],
        status: "Unpaid",
        chartData: [10, 15, 12, 18, 20, 25, 30]
    },
    {
        name: "COCONUT COLOSSA...",
        image: "https://via.placeholder.com/40/ffa500/ffffff?text=CC",
        time: "4h",
        marketCap: "$436K",
        marketCapChange: "+3.718%",
        liquidity: "$75.5K",
        volume: "$20.9K",
        txns: { total: 214, buy: 103, sell: 111 },
        tokenInfo: [
            { value: "13.55%", positive: true },
            { value: "2.5%", positive: true },
            { value: "1795", positive: true },
            { value: "0%", positive: false },
            { value: "4.33%", positive: false },
            { value: "447", positive: false },
            { value: "0%", positive: false }
        ],
        status: "Paid",
        chartData: [20, 22, 21, 23, 24, 25, 24]
    },
    {
        name: "MINE MINE",
        image: "https://via.placeholder.com/40/6366f1/ffffff?text=MM",
        time: "39m",
        marketCap: "$118K",
        marketCapChange: "+7.302%",
        liquidity: "$36.9K",
        volume: "$7.3K",
        txns: { total: 92, buy: 47, sell: 45 },
        tokenInfo: [
            { value: "22.72%", positive: true },
            { value: "3.4%", positive: true },
            { value: "648", positive: true },
            { value: "4.51%", positive: false },
            { value: "10.35%", positive: false },
            { value: "239", positive: false },
            { value: "7.89%", positive: false }
        ],
        status: "Unpaid",
        chartData: [15, 16, 17, 18, 19, 20, 21]
    },
    {
        name: "AWA AWA",
        image: "https://via.placeholder.com/40/4ade80/ffffff?text=AA",
        time: "9m",
        marketCap: "$34.3K",
        marketCapChange: "-32.8%",
        liquidity: "$19.7K",
        volume: "$12.9K",
        txns: { total: 168, buy: 101, sell: 67 },
        tokenInfo: [
            { value: "28.45%", positive: true },
            { value: "1.6%", positive: true },
            { value: "306", positive: true },
            { value: "0%", positive: false },
            { value: "16.47%", positive: false },
            { value: "90", positive: false },
            { value: "0%", positive: false }
        ],
        status: "Paid",
        chartData: [30, 28, 26, 24, 22, 20, 18]
    },
    {
        name: "circom CircomChan",
        image: "https://via.placeholder.com/40/ff6b6b/ffffff?text=CC",
        time: "14m",
        marketCap: "$9.59K",
        marketCapChange: "+57.63%",
        liquidity: "$14K",
        volume: "$5.55K",
        txns: { total: 73, buy: 47, sell: 26 },
        tokenInfo: [
            { value: "24.46%", positive: true },
            { value: "0%", positive: true },
            { value: "29", positive: true },
            { value: "1.74%", positive: false },
            { value: "3.57%", positive: false },
            { value: "12", positive: false },
            { value: "1.74%", positive: false }
        ],
        status: "Unpaid",
        chartData: [5, 7, 9, 11, 13, 15, 17]
    },
    {
        name: "ORANGE GIANT ORA...",
        image: "https://via.placeholder.com/40/ff8c00/ffffff?text=OG",
        time: "3h",
        marketCap: "$107K",
        marketCapChange: "-12.3%",
        liquidity: "$35.9K",
        volume: "$7.3K",
        txns: { total: 79, buy: 45, sell: 34 },
        tokenInfo: [
            { value: "20.69%", positive: true },
            { value: "6.45%", positive: true },
            { value: "773", positive: true },
            { value: "0%", positive: false },
            { value: "1.85%", positive: false },
            { value: "245", positive: false },
            { value: "0%", positive: false }
        ],
        status: "Paid",
        chartData: [25, 24, 23, 22, 21, 20, 19]
    },
    {
        name: "Pigger Wigger Pig",
        image: "https://via.placeholder.com/40/ff69b4/ffffff?text=PW",
        time: "3d",
        marketCap: "$2.77M",
        marketCapChange: "+6.639%",
        liquidity: "$208K",
        volume: "$8.25K",
        txns: { total: 52, buy: 32, sell: 20 },
        tokenInfo: [
            { value: "18%", positive: true },
            { value: "11.15%", positive: true },
            { value: "2865", positive: true },
            { value: "0%", positive: false },
            { value: "0.65%", positive: false },
            { value: "392", positive: false },
            { value: "0%", positive: false }
        ],
        status: "Paid",
        chartData: [100, 102, 104, 106, 108, 110, 112]
    },
    {
        name: "purg pig aura",
        image: "https://via.placeholder.com/40/9b59b6/ffffff?text=PP",
        time: "1h",
        marketCap: "$16.5K",
        marketCapChange: "+2.1%",
        liquidity: "$12.3K",
        volume: "$4.2K",
        txns: { total: 119, buy: 65, sell: 54 },
        tokenInfo: [
            { value: "23.37%", positive: true },
            { value: "0%", positive: true },
            { value: "55", positive: true }
        ],
        status: "Unpaid",
        chartData: [8, 9, 10, 11, 12, 13, 14]
    }
];

// Function to create a simple SVG chart
function createMiniChart(data, isPositive) {
    const width = 60;
    const height = 30;
    const padding = 2;
    const maxValue = Math.max(...data);
    const minValue = Math.min(...data);
    const range = maxValue - minValue || 1;
    
    const points = data.map((value, index) => {
        const x = (index / (data.length - 1)) * (width - padding * 2) + padding;
        const y = height - ((value - minValue) / range) * (height - padding * 2) - padding) - padding;
        return `${x},${y}`;
    }).join(' ');
    
    const color = isPositive ? '#4ade80' : '#ef4444';
    
    return `
        <svg width="${width}" height="${height}" class="mini-chart">
            <polyline
                points="${points}"
                fill="none"
                stroke="${color}"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    `;
}

// Function to render the table
function renderTable() {
    const tbody = document.getElementById('cryptoTableBody');
    tbody.innerHTML = '';
    
    cryptoData.forEach(crypto => {
        const row = document.createElement('tr');
        
        const isPositive = crypto.marketCapChange.startsWith('+');
        const chart = createMiniChart(crypto.chartData, isPositive);
        
        row.innerHTML = `
            <td>
                <div class="pair-info">
                    <img src="${crypto.image}" alt="${crypto.name}" class="pair-image" onerror="this.src='https://via.placeholder.com/40/2a2a2a/ffffff?text=?'">
                    <div class="pair-details">
                        <div class="pair-name">${crypto.name}</div>
                        <div class="pair-time">${crypto.time}</div>
                    </div>
                    ${chart}
                    <div class="pair-icons">
                        <span class="pair-icon">🔒</span>
                        <span class="pair-icon">📎</span>
                        <span class="pair-icon">🔍</span>
                    </div>
                </div>
            </td>
            <td>
                <div class="market-cap">
                    <div class="market-cap-value">${crypto.marketCap}</div>
                    <div class="market-cap-change ${isPositive ? 'positive' : 'negative'}">${crypto.marketCapChange}</div>
                </div>
            </td>
            <td class="liquidity">${crypto.liquidity}</td>
            <td class="volume">${crypto.volume}</td>
            <td>
                <div class="txns-info">
                    <div class="txns-total">${crypto.txns.total}</div>
                    <div class="txns-split">${crypto.txns.buy} / ${crypto.txns.sell}</div>
                </div>
            </td>
            <td>
                <div class="token-info">
                    ${crypto.tokenInfo.map(info => 
                        `<span class="${info.positive ? 'positive' : 'negative'}">${info.value}</span>`
                    ).join('')}
                    <span class="status-badge ${crypto.status === 'Paid' ? 'status-paid' : 'status-unpaid'}">${crypto.status}</span>
                </div>
            </td>
            <td>
                <button class="btn-buy">Buy</button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
    
    // Attach buy button listeners after rendering
    attachBuyButtonListeners();
}

// Tab switching functionality
document.addEventListener('DOMContentLoaded', () => {
    renderTable();
    
    // Tab switching
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
    
    // Timeframe switching
    document.querySelectorAll('.timeframe').forEach(timeframe => {
        timeframe.addEventListener('click', () => {
            document.querySelectorAll('.timeframe').forEach(t => t.classList.remove('active'));
            timeframe.classList.add('active');
        });
    });
    
});

// Update buy buttons after rendering
function attachBuyButtonListeners() {
    document.querySelectorAll('.btn-buy').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const row = e.target.closest('tr');
            const pairName = row.querySelector('.pair-name').textContent;
            alert(`Buy ${pairName}`);
        });
    });
}

