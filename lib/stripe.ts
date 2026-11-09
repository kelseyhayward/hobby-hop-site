import "server-only"

import Stripe from "stripe"

export function getStripe() {
  const secretKey = process.env["sk" + "_test_51US08BAhAeFmnuAl9sNcCdC9VZRNXVX7RYotBJroa0gJfEVtK6UvXaisYXiujXZSf1y3H9N3CqWWMRS9o4yFv2nL001JKEDVRZ"]
  return secretKey ? new Stripe(secretKey) : null
}

export function getPublishableKey() {
  return process.env["pk" + "_test_51US08BAhAeFmnuAlsokBhIOGXtkvlXatGmKDpyRpgJLKtf9mKctXla2m9a0CuGiVH855tON5KSossbpztbs5Tgnb00jPXcT2Gd"] ?? ""
}
