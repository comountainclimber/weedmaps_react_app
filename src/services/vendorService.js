import fetchRequest from './apiService';

export function fetchMenuData(vendor) {
    return fetchRequest(vendor.dataSource, 'GET');
}

export function fetchVendorData(vendor) {
    return fetchRequest(`https://weedmaps.com/${vendor.internalUrl}.json`, 'GET');
}

export const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
});
