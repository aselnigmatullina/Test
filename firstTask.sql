SELECT p_name, SUM(l.lot_nds) sumLot, SUM(c.customers_nds) sumCust
FROM lot l, procedure p, customers c
LEFT JOIN l ON procedure_id = l.lot_id
LEFT JOIN c ON l.lot_id = c.lot_id
GROUP BY procedure_name




