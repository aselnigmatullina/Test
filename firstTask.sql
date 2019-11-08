SELECT p.name, sum(l.nds),sum(c.nds)
FROM procedure p
LEFT JOIN lot l USING(procedure_id)
LEFT JOIN customers c USING(lot_id)
GROUP BY p.procedure_id