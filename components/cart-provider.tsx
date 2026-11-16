"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import type { ProductKey } from "@/lib/products"
import { PRODUCT_KEYS } from "@/lib/kits"

export type CartQuantities = Partial<Record<ProductKey, number>>

type CartContextValue = {
  quantities: CartQuantities
  itemCount: number
  setQuantity: (key: ProductKey, quantity: number) => void
  addItem: (key: ProductKey, quantity: number) => void
}

const STORAGE_KEY = "hobby-hop-cart"
const validProductKeys = new Set<string>(PRODUCT_KEYS)
const CartContext = createContext<CartContextValue | null>(null)

function normalizeCart(value: unknown): CartQuantities {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {}

  return Object.fromEntries(
    Object.entries(value).filter(([key, quantity]) =>
      validProductKeys.has(key) && Number.isInteger(quantity) && Number(quantity) > 0 && Number(quantity) <= 20,
    ),
  ) as CartQuantities
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [quantities, setQuantities] = useState<CartQuantities>({})
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    try {
      const savedCart = window.localStorage.getItem(STORAGE_KEY)
      setQuantities(savedCart ? normalizeCart(JSON.parse(savedCart)) : {})
    } catch {
      setQuantities({})
    } finally {
      setIsLoaded(true)
    }
  }, [])

  useEffect(() => {
    if (!isLoaded) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(quantities))
    } catch {
      return
    }
  }, [isLoaded, quantities])

  const setQuantity = useCallback((key: ProductKey, quantity: number) => {
    const nextQuantity = Math.max(0, Math.min(20, Math.floor(quantity)))
    setQuantities((current) => {
      const next = { ...current }
      if (nextQuantity === 0) delete next[key]
      else next[key] = nextQuantity
      return next
    })
  }, [])

  const addItem = useCallback((key: ProductKey, quantity: number) => {
    const amountToAdd = Math.max(0, Math.floor(quantity))
    if (!amountToAdd) return
    setQuantities((current) => ({
      ...current,
      [key]: Math.min(20, (current[key] ?? 0) + amountToAdd),
    }))
  }, [])

  const itemCount = Object.values(quantities).reduce((total, quantity) => total + (quantity ?? 0), 0)
  const value = useMemo(() => ({ quantities, itemCount, setQuantity, addItem }), [quantities, itemCount, setQuantity, addItem])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within a CartProvider")
  return context
}
