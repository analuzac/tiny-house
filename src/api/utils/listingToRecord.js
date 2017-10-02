export default function listingToRecord(listing) {
  const record = { fields: {} };
  if (listing.id) record.id = listing.id;
  if (listing.coordinates) record.fields.coordinates = listing.coordinates;
  if (listing.dimensions) record.fields.dimensions = listing.dimensions;
  if (listing.rent) record.fields.rent = listing.rent;
  if (listing.date) record.fields.date = listing.date;
  if (listing.amenities) record.fields.amenities = listing.amenities;
  return record;
}
